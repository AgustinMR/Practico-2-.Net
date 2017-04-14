using ChannelMessage;
using ChannelNameNamespace;
using EmployeeHubNamespace;
using Microsoft.AspNet.SignalR;
using Serilog;
using Serilog.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace ServiceLayerREST.Controllers
{
    [RoutePrefix("tasks")]
    public class EmployeeTaskController : ApiController
    {
        private IHubContext context;

        private ChannelName channel = ChannelName.USUARIO_CONECTADO;

        public EmployeeTaskController()
        {
            context = GlobalHost.ConnectionManager.GetHubContext<EmployeeHub>();
        }


        [Route("long")]
        [HttpGet]
        public IHttpActionResult GetLongTask()
        {
            Log.Information("Starting long task");

            double steps = 10;
            var eventName = "longTask.status";

            ExecuteTask(eventName, steps);

            return Ok("Long task complete");
        }



        [Route("short")]
        [HttpGet]
        public IHttpActionResult GetShortTask()
        {
            Log.Information("Starting short task");

            double steps = 5;
            var eventName = "shortTask.status";

            ExecuteTask(eventName, steps);

            return Ok("Short task complete");
        }

        private void ExecuteTask(string eventName, double steps)
        {
            var status = new Status
            {
                State = "starting",
                PercentComplete = 0.0
            };

            PublishEvent(eventName, status);

            for (double i = 0; i < steps; i++)
            {
                status.State = "working";
                status.PercentComplete = (i / steps) * 100;
                PublishEvent(eventName, status);

                Thread.Sleep(500);
            }

            status.State = "complete";
            status.PercentComplete = 100;
            PublishEvent(eventName, status);
        }

        private void PublishEvent(string eventName, Status status)
        {
            context.Clients.Group(channel.ToString()).OnEvent(ChannelName.USUARIO_CONECTADO, new EventMessage
            {
                channel = ChannelName.USUARIO_CONECTADO,
                Data = status
            });
        }
    }


    public class Status
    {
        public string State { get; set; }

        public double PercentComplete { get; set; }
    }
}
