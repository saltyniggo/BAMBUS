using Microsoft .AspNetCore.Mvc;
using Microsoft .AspNetCore.Authorization;
using Backend.Models;
using Backend.DTOs.User;

namespace Backend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    


    public class UserController : ControllerBase
    {
        public UserController()
        {
        }

        [HttpPost ("Register")]
        public async <IActionResult> Register(RegisterDTO registerDTO)
        {
            return Ok();
        }

        [HttpPost("Login")]
        public async <IActionResult> Login(LoginDTO loginDTO)
        {
            return Ok();
        }

        [Authorize] // just for logged in users
        [HttpPut("UpdateUser")]
        public async <IActionResult> UpdateUser(UpdateUserDTO updateUserDTO)
        {
            return Ok();
        }

        [Authorize] // just for logged in users and admin
        [HttpDelete("DeleteUser")]
        public async <IActionResult> DeleteUser(int id)
        {
            return Ok();
        }


        [Authorize] //just for manager and admin
        [HttpGet("GetAllUser")]
        public async <IActionResult> GetAllUser()
        {
            return Ok();
        }

    }
}
```