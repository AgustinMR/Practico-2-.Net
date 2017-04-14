using ChannelMessage;
using ChannelNameNamespace;
using Microsoft.AspNet.SignalR.Client;
using Microsoft.Owin.Hosting;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio5_SignalR
{
    class Program
    {
        static void Main(string[] args)
        {

            Log.Logger = new LoggerConfiguration().WriteTo.ColoredConsole().CreateLogger();

            string baseAddress = "http://localhost:9123/";

            using (WebApp.Start<Startup>(url: baseAddress))
            {
                var hubConnection = new HubConnection(baseAddress);
                IHubProxy eventHubProxy = hubConnection.CreateHubProxy("EmployeeHub");
                eventHubProxy.On<string, EventMessage>("OnEvent", (channel, ev) => Log.Information("Event received on {channel} channel - {@ev}", channel, ev));
                hubConnection.Start().Wait();

                eventHubProxy.Invoke("Subscribe", ChannelName.USUARIO_CONECTADO);

                Console.WriteLine($"Server is running on {baseAddress}");
                Console.WriteLine("Press <enter> to stop server");
                Console.ReadLine();

            }

        }
    }
}
