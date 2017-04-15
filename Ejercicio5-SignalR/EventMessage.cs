using ChannelNameNamespace;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChannelMessage
{
    public class EventMessage
    {

        public string channel { get; set; }

        public DateTimeOffset Timestamp { get; set; }

        public string Name { get; set; }

        public object Data
        {
            get { return _data; }
            set
            {
                _data = value;
                this.Json = JsonConvert.SerializeObject(_data);
            }
        }

        private object _data;
        public string Json { get; private set; }

        public EventMessage()
        {
            Timestamp = DateTimeOffset.Now;
        }
    }
}