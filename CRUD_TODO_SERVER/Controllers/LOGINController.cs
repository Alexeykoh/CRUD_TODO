using Microsoft.AspNetCore.Mvc;

namespace CRUD_TODO_SERVER.Controllers

{
      [ApiController]
      [Route("[controller]")]
    public class LOGINController : ControllerBase
    {
        
            [HttpGet]

            public string Login(string login,string password)
            {
                return "kek";
            }
      
       
        
        
    }
}
