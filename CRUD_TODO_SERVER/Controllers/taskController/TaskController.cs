using CRUD_TODO_SERVER.Services;
using Microsoft.AspNetCore.Mvc;
using CRUD_TODO_SERVER.Models;

namespace CRUD_TODO_SERVER.Controllers.TaskController
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : Controller
    {
        [HttpGet]
        public IActionResult get_all_by_user(string name)

        {
            

            return Ok(sqlTaskservices.Sql_get_task_byId(name));
        }
    }
}
