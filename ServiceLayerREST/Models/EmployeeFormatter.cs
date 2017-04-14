using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using Shared.Entities;
using System.IO;
using System.Net.Http;
using System.Threading;
using System.Web.Http.ModelBinding;
using System.Web.Http.Controllers;
using System.Web.Http.ValueProviders;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ServiceLayerREST.Models
{

    public class EmployeeModelBinder : IModelBinder
    {
        static EmployeeModelBinder()
        {

        }

        public bool BindModel(HttpActionContext actionContext, ModelBindingContext bindingContext)
        {
            if (bindingContext.ModelType != typeof(FullTimeEmployee) && bindingContext.ModelType != typeof(PartTimeEmployee))
            {
                return false;
            }

            ValueProviderResult val = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);
            if (val == null)
            {
                return false;
            }

            string key = val.RawValue as string;
            if (key == null)
            {
                bindingContext.ModelState.AddModelError(bindingContext.ModelName, "Tipo de objeto equivocado.");
                return false;
            }

            var data = key.Split(new char[]{','});
            if (data.Length > 1)
            {
                if (bindingContext.ModelType != typeof(FullTimeEmployee))
                {
                    FullTimeEmployee result = new FullTimeEmployee();
                    result.EmployeeId = Convert.ToInt32(data[0]);
                    result.Name = data[1];
                    result.StartDate = Convert.ToDateTime(data[2]);
                    result.Salary = Convert.ToInt32(data[3]);
                }
                else {
                    PartTimeEmployee result = new PartTimeEmployee();
                    result.EmployeeId = Convert.ToInt32(data[0]);
                    result.Name = data[1];
                    result.StartDate = Convert.ToDateTime(data[2]);
                    result.HourlyRate = Convert.ToDouble(data[3]);
                }
                return true;
            }

            bindingContext.ModelState.AddModelError(bindingContext.ModelName, "No se puede serializar el empleado.");
            return false;
        }

    }

}