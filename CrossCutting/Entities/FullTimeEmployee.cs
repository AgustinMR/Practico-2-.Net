using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;
using System.Runtime.Serialization;

namespace Shared.Entities
{
    [DataContract(Namespace = "Service.Employees")]
    public class FullTimeEmployee : Employee
    {
        [DataMember]
        public int Salary { get; set; }

        [DataMember]
        public static string empType = "Full Time";
    }
}
