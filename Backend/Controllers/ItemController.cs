namespace Backend.Controllers
{
    public class ItemController : ControllerBase
    {
        [HttpGet("GetAllItems")]
        public async Task<IActionResult> GetAllItems()
        {
            return Ok("hier alle Items");
        }

        [HttpPost("AddItem")]
        public async Task<IActionResult> AddItem()
        {
            return Ok("hier wird ein Item erstellt");
        }

        [HttpDelete("DeleteItem")]
        public async Task<IActionResult> DeleteItem()
        {
            return Ok("hier wird ein Item gelöscht");
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
            return Ok("hier wird eine Reservation hinzugefügt");
        }

        [HttpPut("RemoveReservation")]
        public async Task<IActionResult> RemoveReservation()
        {
            return Ok("hier wird eine Reservation entfernt");
        }


    }
}