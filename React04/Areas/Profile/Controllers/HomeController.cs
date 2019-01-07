using Microsoft.AspNetCore.Mvc;
using React.Common.Base;

namespace React04.Areas.Profile.Controllers
{
    [Area("Profile")]
    public class HomeController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}