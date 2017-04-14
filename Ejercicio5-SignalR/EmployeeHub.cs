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
        public async Task Subscribe(string channel)
        {
            await Groups.Add(Context.ConnectionId, channel);

            var ev = new EventMessage
            {
                channel = ChannelName.USUARIO_CONECTADO,
                Data = new
                {
                    Context.ConnectionId,
                    ChannelName = channel
                }
            };

            await Publish(ev);
        }

        public async Task Unsubscribe(string channel)
        {
            await Groups.Remove(Context.ConnectionId, channel);

            var ev = new EventMessage
            {
                channel = ChannelName.USUARIO_CONECTADO,
                Data = new
                {
                    Context.ConnectionId,
                    ChannelName = channel
                }
            };

            await Publish(ev);
        }


        public Task Publish(EventMessage channelEvent)
        {
            Clients.Group(channelEvent.channel.ToString()).OnEvent(channelEvent.channel, channelEvent);

            Clients.Group(ChannelName.USUARIO_CONECTADO.ToString()).OnEvent(ChannelName.USUARIO_CONECTADO, channelEvent);
            /*
            if (channelEvent.ChannelName != Constants.AdminChannel)
            {
                // Push this out on the admin channel
                //
                Clients.Group(Constants.AdminChannel).OnEvent(Constants.AdminChannel, channelEvent);
            }*/

            return Task.FromResult(0);
        }


        public override Task OnConnected()
        {
            var ev = new EventMessage
            {
                channel = ChannelName.USUARIO_CONECTADO,
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
                channel = ChannelName.USUARIO_CONECTADO,
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