using ChannelMessage;
using ChannelNameNamespace;
using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace EmployeeHubNamespace
{
    public class EmployeeHub : Hub
    {
        public async Task Subscribe(string c)
        {
            await Groups.Add(Context.ConnectionId, c);

            var ev = new EventMessage
            {
                channel = c,
                Data = new
                {
                    Context.ConnectionId,
                    ChannelName = c
                }
            };

            await Publish(ev);
        }

        public async Task Unsubscribe(string c)
        {
            await Groups.Remove(Context.ConnectionId, c);

            var ev = new EventMessage
            {
                channel = c,
                Data = new
                {
                    Context.ConnectionId,
                    ChannelName = c
                }
            };

            await Publish(ev);
        }


        public Task Publish(EventMessage channelEvent)
        {
            Clients.Group(channelEvent.channel).OnEvent(channelEvent.channel, channelEvent);
            //Clients.Group(ChannelName.USUARIO_CONECTADO.ToString()).OnEvent(ChannelName.USUARIO_CONECTADO, channelEvent);
            return Task.FromResult(0);
        }


        public override Task OnConnected()
        {
            var ev = new EventMessage
            {
                channel = "USUARIO_CONECTADO",
                Data = new
                {
                    Context.ConnectionId,
                }
            };

            Publish(ev);

            return base.OnConnected();
        }


        public override Task OnDisconnected(bool stopCalled)
        {
            var ev = new EventMessage
            {
                channel = "USUARIO_DESCONECTADO",
                Data = new
                {
                    Context.ConnectionId,
                }
            };

            Publish(ev);

            return base.OnDisconnected(stopCalled);
        }

    }
}