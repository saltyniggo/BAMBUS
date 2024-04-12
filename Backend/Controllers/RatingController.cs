using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Backend.Models;
using Backend.DTOs.Rating;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class RatingController : ControllerBase
    {
        public RatingController()
        {
        }

        [HttpPost("AddRating")]
        public async IActionResult AddRating(AddRatingDTO addRatingDTO)
        {
            return Ok();
        }

        [HttpPut("UpdateRating")]
        public async IActionResult UpdateRating(UpdateRatingDTO updateRatingDTO)
        {
            return Ok();
        }

        [HttpDelete("DeleteRating")]
        public async IActionResult DeleteRating(int id)
        {
            return Ok();
        }

        [HttpGet("GetAllRating")]
        public async IActionResult GetAllRating()
        {
            return Ok();
        }
    }
}