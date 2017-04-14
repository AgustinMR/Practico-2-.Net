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
            PublishEvent(ChannelName.EMPLEADO_NUEVO, e);
            return Ok();
        }

        [Route("")]
        [HttpGet]
        public IHttpActionResult UserConnectedTask()
        {
            PublishEvent(ChannelName.USUARIO_CONECTADO);
            return Ok();
        }

        private void PublishEvent(ChannelName c)
        {
            context.Clients.Group(c.ToString()).OnEvent(c, new EventMessage
            {
                channel = c,
                Data = c.ToString()
            });
        }

        private void PublishEvent(ChannelName c, Employee e)
        {
            context.Clients.Group(c.ToString()).OnEvent(c, new EventMessage
            {
                channel = c,
                Data = e
            });
        }
    }

}
