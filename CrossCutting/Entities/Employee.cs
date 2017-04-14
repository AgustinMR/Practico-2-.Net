using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.Runtime.Serialization;

namespace Shared.Entities {

    [BsonDiscriminator(RootClass = true)]
    [BsonKnownTypes(typeof(FullTimeEmployee), typeof(PartTimeEmployee))]
    [KnownType(typeof(FullTimeEmployee))]
    [KnownType(typeof(PartTimeEmployee))]
    [DataContract(IsReference = true, Name = "Employee", Namespace = "Service.Employees")]
    public abstract class Employee
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [DataMember]
        public int EmployeeId { get; set; }
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public DateTime StartDate { get; set; }

    }

}
