using Microsoft.AspNetCore.HttpOverrides;
using Umbraco.Cms.Infrastructure.Persistence;



WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

System.Data.Common.DbProviderFactories.RegisterFactory(
    "Microsoft.Data.SqlClient",
    Microsoft.Data.SqlClient.SqlClientFactory.Instance);

// إضافة إعدادات Umbraco
builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()
    .Build();

// تهيئة MVC
builder.Services.AddMvc(options =>
{
    options.SuppressAsyncSuffixInActionNames = false;
});
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromSeconds(5); // أو أي مدة تحبها
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});
//builder.WebHost.UseUrls("http://*:5001");

WebApplication app = builder.Build();

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});
// تأكد من استخدام الـ session بعد ما يتم بناء التطبيق بالكامل
app.UseSession();

// ابدأ Umbraco بعد بناء التطبيق
await app.BootUmbracoAsync();

//الآن يمكنك استخدام IUmbracoDatabaseFactory و باقي الخدمات بشكل آمن
using (var scope = app.Services.CreateScope())
{
    var dbFactory = scope.ServiceProvider.GetRequiredService<IUmbracoDatabaseFactory>();

    // تقدر تنفذ أي أوامر على dbFactory هنا إذا كنت محتاج
}

app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
    });

await app.RunAsync();
