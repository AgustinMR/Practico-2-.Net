using ChannelMessage;
using ChannelNameNamespace;
using EmployeeHubNamespace;
using Microsoft.AspNet.SignalR;
using Serilog;
using Serilog.Core;
using Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace ServiceLayerREST.Controllers
{
    [RoutePrefix("tasks/employees")]
    public class EmployeeTaskController : ApiController
    {
        private IHubContext context;

        public EmployeeTaskController()
        {
            context = GlobalHost.ConnectionManager.GetHubContext<EmployeeHub>();
        }

        [Route("")]
        [HttpPost]
        public IHttpActionResult AddEmployeeEvent([FromUri]Employee e)
        {
            PublishEvent("EMPLEADO_NUEVO", "employee.added", e);
            return Ok("EMPLEADO_NUEVO");
        }

        [Route("")]
        [HttpGet]
        public IHttpActionResult UserConnectedTask()
        {
            PublishEvent("USUARIO_CONECTADO", "user.registred");
            return Ok("USUARIO_CONECTADO");
        }

        private void PublishEvent(string c, string n)
        {
            context.Clients.Group(c).OnEvent(c, new EventMessage
            {
                channel = c,
                Name = n,
                Data = c.ToString()
            });
        }

        private void PublishEvent(string c, string n, Employee e)
        {
            context.Clients.Group(c).OnEvent(c, new EventMessage
            {
                channel = c,
                Name = n,
                Data = e
            });
        }
    }

}
