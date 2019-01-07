using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using React.Common.Base;
using React.Common.Entities;
using System.Threading.Tasks;

namespace React04.Controllers
{
    public class HomeController : BaseController
    {
        private IUserManager _userManager;

        public HomeController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Index(UserInfo model, string returnUrl)
        {
            UserInfo u = await _userManager.SignInAsync(this.HttpContext, model);
            if (u != null && u.UserID != 0)
            {
                if (!string.IsNullOrWhiteSpace(returnUrl))
                    return Redirect(returnUrl);
                else
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
        [AllowAnonymous]
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
