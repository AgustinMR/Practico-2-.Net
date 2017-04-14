using Microsoft.AspNet.SignalR.Client;
using Microsoft.Owin.Hosting;
using Newtonsoft.Json;
using Owin;
using Serilog;
using Serilog.Core;
using ServiceLayerREST.Models;
using Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.ModelBinding.Binders;

namespace ServiceLayerREST
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            config.EnableCors();

            var provider = new SimpleModelBinderProvider(typeof(FullTimeEmployee), new EmployeeModelBinder());
            config.Services.Insert(typeof(ModelBinderProvider), 0, provider);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

        }

    }
}
