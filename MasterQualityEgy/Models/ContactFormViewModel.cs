using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace MasterQuality.Models
{
    public class ContactFormViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }


        [Required(ErrorMessage = "Phone number is required")]
        [RegularExpression(@"^(\+?\d{10,15}|0\d{10})$", ErrorMessage = "Please enter a valid phone number.")]
        public string PhoneNumber { get; set; }


        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Please enter a valid email address")]
        public string Email { get; set; }



        [Required(ErrorMessage = "Subject is required")]
        public string Subject { get; set; }


        public string? Message { get; set; }

    }

}
