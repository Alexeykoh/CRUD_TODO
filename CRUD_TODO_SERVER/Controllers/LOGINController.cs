using CRUD_TODO_SERVER.Services;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_TODO_SERVER.Controllers

{
      [ApiController]
      [Route("[controller]")]
    public class LOGINController : ControllerBase
    {
        
            [HttpGet]

            public object Login(string login,string password)
            {

            return sqliteServices.Sql_login(login, password); 
            }
   
    }

}
