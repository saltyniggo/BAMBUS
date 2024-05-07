using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class MessageController : ControllerBase
    {
        [HttpGet("GetMessagesFromUserId")]
        public async Task<IActionResult> GetMessagesFromUserId()
        {
            return Ok("hier tolle Nachrichten");
        }

        [HttpPost("CreateMessage")]
        public async Task<IActionResult> CreateMessage()
        {
            return Ok("hier wird eine Nachricht erstellt");
        }

        [HttpDelete("DeleteMessage")]
        public async Task<IActionResult> DeleteMessage()
        {
            return Ok("hier wird eine Nachricht gel�scht");
        }
    }
}