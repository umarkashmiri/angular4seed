using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Middlewares;
using Microsoft.EntityFrameworkCore;
using Angular4Seed.Data;
using Swashbuckle.AspNetCore.Swagger;
using Angular4Seed.IServices;
using AngularSeed.Services;

namespace Angular4Seed
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddDbContext<AppDataContext>(options =>
      {
        string connectionString = Configuration.GetConnectionString("DefaultConnection");
        options.UseSqlServer(connectionString, opt => opt.MigrationsAssembly("Angular4Seed"));
      });

      services.AddMvc();

      //
      services.AddTransient<IJobService, JobService>();

      // Register Swagger Generator
      services.AddSwaggerGen(
          c =>
          {
            c.SwaggerDoc("v1",
                      new Info
                      {
                        Title = "Test API",
                        Version = "v1",
                        Description = "A simple example ASP.NET Core Web API",
                        TermsOfService = "None",
                        Contact = new Contact { Name = "Waqas Rasheed", Email = "", Url = "https://twitter.com/WaqasRasheed14" },
                        License = new License { Name = "Use under LICX", Url = "https://jangoodev.com/license" }
                      }
                      );
          }
      );

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      app.UseApplicationEvents();
      app.UseMvc();
      app.UseStaticFiles();

      app.UseSwagger();
      app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "Test API V1"); });
      app.MapSignalR();
    }
  }
}
