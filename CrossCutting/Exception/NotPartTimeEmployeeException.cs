using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Exception
{
    public class NotPartTimeEmployeeException : System.Exception
    {
        public NotPartTimeEmployeeException(int EmployeeId) : base(String.Format("Error. Ese id no corresponde a ningun empleado, o no a un empleado de tiempo completo. id: {0}", EmployeeId)) { }
        public NotPartTimeEmployeeException(string message) : base(message) { }
        public NotPartTimeEmployeeException(string message, System.Exception inner) : base(message, inner) { }
        protected NotPartTimeEmployeeException(System.Runtime.Serialization.SerializationInfo info,  System.Runtime.Serialization.StreamingContext context) { }

    }
}
