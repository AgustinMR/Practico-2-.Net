using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Exception
{
    public class NotAnExistingEmployee : System.Exception
    {
        public NotAnExistingEmployee(int EmployeeId) : base(String.Format("Error. No existe ningun empleado con id: {0}", EmployeeId)) { }
        public NotAnExistingEmployee(string message) : base(message) { }
        public NotAnExistingEmployee(string message, System.Exception inner) : base(message, inner) { }
        protected NotAnExistingEmployee(System.Runtime.Serialization.SerializationInfo info, System.Runtime.Serialization.StreamingContext context) { }

    }
}
