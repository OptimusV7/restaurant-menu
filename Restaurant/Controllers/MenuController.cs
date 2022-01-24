using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using System.Text.Json;

namespace Restaurant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly ILogger<MenuController> _logger;

        public MenuController(IHostingEnvironment hostingEnvironment, ILogger<MenuController> logger)
        {
            _hostingEnvironment = hostingEnvironment;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            string contentRootPath = _hostingEnvironment.ContentRootPath;
            var JSON = System.IO.File.ReadAllText(contentRootPath + "/menuItems.json");
            string jsonString = JsonSerializer.Serialize(JSON);
            
            return Ok(jsonString.Trim());
        }
    }
}
