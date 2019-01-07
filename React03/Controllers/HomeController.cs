using Microsoft.AspNetCore.Mvc;
using React.Common.Base;
using React.Common.Entities;
using System.Threading.Tasks;

namespace React03.Controllers
{
    public class HomeController : BaseController
    {
        private IUserManager _userManager;

        public HomeController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(UserInfo model)
        {
            UserInfo u = await _userManager.SignInAsync(this.HttpContext, model);
            if (u != null && u.UserID != 0)
            {
                //Authenticated, Redirect
                return RedirectToAction("Index", "Home", new { area = "Profile" });
            }

            ViewBag.AuthMessage = "Authentication Failed!";

            return View();
        }

        [HttpGet]
        public IActionResult SignOut()
        {
            _userManager.SignOut(this.HttpContext);

            return RedirectToAction("Index", "Home", new { area = "" });
        }

        [HttpGet]
        public IActionResult Forgot()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
    }
}
