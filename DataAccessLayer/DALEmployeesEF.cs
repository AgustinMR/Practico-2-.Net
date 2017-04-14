using Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace DataAccessLayer
{

    public class EmployeeDbContext : DbContext {
        public EmployeeDbContext() : base("name=EmployeesConnectionString") { }
        public DbSet<Employee> Employees { get; set; }
    }

    public class DALEmployeesEF : IDALEmployees {

        public void AddEmployee(Employee emp)
        {
            if (emp != null) {
                EmployeeDbContext context = new EmployeeDbContext();
                context.Employees.Add(emp);
                context.SaveChanges();
            }
        }

        public void DeleteEmployee(int id)
        {
            Employee e = GetEmployee(id);
            if (e != null) {
                EmployeeDbContext context = new EmployeeDbContext();
                context.Employees.Remove(e);
                context.SaveChanges();
            }
        }

        public void UpdateEmployee(Employee emp)
        {
            Employee e = GetEmployee(emp.EmployeeId);
            EmployeeDbContext context = new EmployeeDbContext();
            if (e != null)
            {
                context.Employees.Attach(emp);
                var entry = context.Entry(e);
                entry.State = EntityState.Modified;
                entry.Property(empOld => empOld.Name).IsModified = true;
                entry.Property(empOld => empOld.StartDate).IsModified = true;
                context.SaveChanges();
            }
        }

        public List<Employee> GetAllEmployees()
        {
            return new EmployeeDbContext().Employees.ToList();
        }

        public Employee GetEmployee(int id)
        {
            return new EmployeeDbContext().Employees.Find(id);
        }
    }

}
