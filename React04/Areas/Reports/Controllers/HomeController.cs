using Microsoft.AspNetCore.Mvc;
using React.Common.Base;

namespace React04.Areas.Reports.Controllers
{
    [Area("Reports")]
    public class HomeController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}