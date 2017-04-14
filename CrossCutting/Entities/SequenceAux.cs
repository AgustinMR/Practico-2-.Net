using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Entities
{
    /*
        Clase definida auxiliarmente para simular id's autogeneradas, con uso exclusivo en la implementacion de DAL mongoDB.
        La razon para esto, es que mongoDB no provee dicha funcionalidad de forma nativa.
        Consiste basicamente en tener disponible una coleccion "Sequence" en la bd, con un unico campo "contador".
        Se tiene un unico documento, y se le suma +1 por cada ingreso de empleados que se ejecute.
        No se resta -1 al eliminar un empleado, para evitar id's repetidas. 
        (implica que el ulimo id dado, no corresponda necesariamente con la cantidad existente de empleados).

    */
    public class SequenceAux
    {
        public ObjectId Id { get; set; }
        public int contador { get; set; }
    }
}
