using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


using Microsoft.Extensions.Options;
using System;
using System.Threading.Tasks;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Configuration.Models;
using Umbraco.Cms.Core.Models.Email;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Website.Controllers;
using Umbraco.Extensions;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Mail;
using Umbraco.Cms.Infrastructure.Persistence;
using MasterQuality.Models;


namespace MasterQuality.Controllers
{
    public class ContactFormController : SurfaceController
    {
        private readonly GlobalSettings _globalSettings;
        private readonly IEmailSender _emailSender;
        private readonly UmbracoHelper _umbracoHelper;
        private readonly IConfiguration _configuration;

        public ContactFormController(
            IUmbracoContextAccessor umbracoContextAccessor,
            IUmbracoDatabaseFactory databaseFactory,
            ServiceContext services,
            AppCaches appCaches,
            IProfilingLogger profilingLogger,
            IPublishedUrlProvider publishedUrlProvider,
            IOptions<GlobalSettings> globalSettings,
            IEmailSender emailSender,
            UmbracoHelper umbracoHelper,
            IConfiguration configuration)
            : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _globalSettings = globalSettings.Value;
            _emailSender = emailSender;
            _umbracoHelper = umbracoHelper;
            _configuration = configuration;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> SubmitAsync(ContactFormViewModel model)
        {




            if (ModelState.IsValid)
            {
                var contentService = Services.ContentService;
                var parentId = Guid.Parse("621b6fb9-2db6-49eb-aa67-c7211009e43e");
                var entry = contentService.Create(model.Email, parentId, "contactItem");
                entry.SetValue("contactName", model.Name);
                entry.SetValue("contactPhoneNumber", model.PhoneNumber);
                entry.SetValue("contactEmail", model.Email);
                entry.SetValue("contactSubject", model.Subject);
                entry.SetValue("contactMessage", model.Message);

                contentService.Save(entry);
                contentService.Publish(entry, new[] { "*" });

                // Work with form data here
                var from = "circle3space@gmail.com";
                var to = "circle3space@gmail.com";

                var message = "Name : " + model.Name;
                message += "<br> Email : " + model.Email;
                message += "<br> PhoneNumber : " + model.PhoneNumber;
                message += "<br> Subject : " + model.Subject;
                message += "<br> Message : " + model.Message;


                var subject = "Contact Us Form - " + model.Email;

                var mailMessage = new EmailMessage(from, to, subject, message, true);

                await _emailSender.SendAsync(mailMessage, Constants.Web.EmailTypes.Notification);

                // Set a success message to be displayed on the view
                TempData["SuccessMessage"] = "Thank you! Your message has been sent.";
                return RedirectToCurrentUmbracoPage();

            }
            else
            {

                return CurrentUmbracoPage();

            }

        }
    }
}
