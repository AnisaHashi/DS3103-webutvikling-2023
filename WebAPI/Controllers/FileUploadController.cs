using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers;

[Route("api/file")]
[ApiController]
    public class FileUploadController : ControllerBase
    {
        private readonly IWebHostEnvironment hosting;

        public FileUploadController(IWebHostEnvironment _hosting){
            hosting = _hosting;
        }

        [HttpPost]
        public IActionResult SaveImage(IFormFile file){
            string webRootPath = hosting.WebRootPath;
            Console.Write("webRoot: ", webRootPath);

            string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");

            Console.Write("absolute: ", absolutePath);

            using(var fileStream = new FileStream(absolutePath, FileMode.Create)){
                file.CopyTo(fileStream);
            }

            return Ok();
        }

    }