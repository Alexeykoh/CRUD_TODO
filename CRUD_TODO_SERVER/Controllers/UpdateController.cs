using CRUD_TODO_SERVER.Services;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_TODO_SERVER.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UpdateController : Controller
    {

        [HttpPut]
        public object update(string name, string password)
        {


            return sqliteServices.Sql_update(name,password);
        }
    }
}
