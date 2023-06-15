using CRUD_TODO_SERVER.Services;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_TODO_SERVER.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RegisterController : Controller
    {
        [HttpPost]

        public object register(string name , string password, string mail)
        {

            return sqliteServices.Sql_register(name, password,mail );
        }

    }
}
