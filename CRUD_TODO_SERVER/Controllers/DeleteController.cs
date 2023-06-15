using CRUD_TODO_SERVER.Services;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_TODO_SERVER.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DeleteController : Controller
    {
        [HttpDelete]
        public object Delete(string name) 
        {


            return sqliteServices.Sql_delete(name);
        }
    }
}
