using Microsoft.AspNetCore.Mvc;

namespace PinBoard.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoriesController : ControllerBase
    {
        [HttpGet]
        public string GetAllStories()
        {
            return "json result";
        }
    }
}
