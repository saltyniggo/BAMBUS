using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class ItemController : ControllerBase
    {
        [HttpGet("GetItems")]
        public async Task<IActionResult> GetItems()
        {
            return Ok("hier alle Items");
        }

        [HttpPost("CreateItem")]
        public async Task<IActionResult> CreateItem()
        {
            return Ok("hier wird ein Item erstellt");
        }

        [HttpDelete("DeleteItem")]
        public async Task<IActionResult> DeleteItem()
        {
            return Ok("hier wird ein Item gel�scht");
        }

        [HttpPut("UpdateItem")]
        public async Task<IActionResult> UpdateItem()
        {
            return Ok("hier wird ein Item geupdatet");
        }

        [HttpPut("UpdateCondition")]
        public async Task<IActionResult> UpdateCondition()
        {
            return Ok("hier wird die Condition geupdatet");
        }

        [HttpPut("AddReservation")]
        public async Task<IActionResult> AddReservation()
        {
            return Ok("hier wird eine Reservation hinzugef�gt");
        }

        [HttpPut("RemoveReservation")]
        public async Task<IActionResult> RemoveReservation()
        {
            return Ok("hier wird eine Reservation entfernt");
        }


    }
}