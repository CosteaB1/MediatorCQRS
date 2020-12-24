using AutoMapper;
using MediatorCQRS.Core.Intefaces;
using MediatorCQRS.Core.Models.User.MapperProfile;
using MediatorCQRS.Core.Models.User.Queries;
using MediatorCQRS.Infrastructure.Data;
using MediatorCQRS.Infrastructure.ProjectDbContext;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MediatorCQRS.Web
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
            string defaultConnectionString = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<MediatorCQRSDbContext>(options =>
                options
                    .UseSqlServer(defaultConnectionString)
                    );
            services.AddAutoMapper(typeof(UserProfile));
            services.AddScoped(typeof(IRepository<>), typeof(EfRepository<>));
            services.AddControllers();
            services.AddMediatR(typeof(GetAllUsersQuery));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
