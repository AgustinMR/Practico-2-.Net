using BusinessLogicLayer;
using DataAccessLayer;
using ServiceLayerREST.Models;
using Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.ModelBinding;

namespace ServiceLayerREST.Controllers {

    [RoutePrefix("api/employees")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EmployeeController : ApiController
    {

        [HttpPost]
        [Route("full")]
        public IHttpActionResult AddEmployee([FromUri]FullTimeEmployee e) {
            if (e != null)
            {
                new BLEmployees(new DALEmployeesMongo()).AddEmployee(e);
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("part")]
        public IHttpActionResult AddEmployee([FromUri]PartTimeEmployee e)
        {
            if (e != null)
            {
                new BLEmployees(new DALEmployeesMongo()).AddEmployee(e);
                return Ok();
            }
            return BadRequest();
        }

        [HttpPut]
        [Route("full")]
        public IHttpActionResult UpdateEmployee([FromUri]FullTimeEmployee e)
        {
            if (e != null)
            {
                new BLEmployees(new DALEmployeesMongo()).UpdateEmployee(e);
                return Ok();
            }
            return BadRequest();
        }

        [HttpPut]
        [Route("part")]
        public IHttpActionResult UpdateEmployee([FromUri]PartTimeEmployee e)
        {
            if (e != null)
            {
                new BLEmployees(new DALEmployeesMongo()).UpdateEmployee(e);
                return Ok();
            }
            return BadRequest();
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IHttpActionResult DeleteEmployee(int id) {
            new BLEmployees(new DALEmployeesMongo()).DeleteEmployee(id);
            return Ok();
        }

        [HttpGet]
        [Route("{id:int}")]
        public Employee GetEmployee(int id) {
            return new BLEmployees(new DALEmployeesMongo()).GetEmployee(id);
        }

        [HttpGet]
        [Route("")]
        public List<Employee> GetAllEmployees() {
            return new BLEmployees(new DALEmployeesMongo()).GetAllEmployees();
        }

    }
}
