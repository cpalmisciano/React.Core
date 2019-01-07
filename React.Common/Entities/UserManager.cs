using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace React.Common.Entities
{
    public class UserManager : IUserManager
    {

        public async Task<UserInfo> SignInAsync(HttpContext httpContext, UserInfo user)
        {
            user.FirstName = "Authenticated";
            user.LastName = "User";
            user.Email = "authenticated@user.com";
            user.UserID = 123;
            user.RoleID = 29;

            ClaimsIdentity identity = new ClaimsIdentity(this.GetUserClaims(user), CookieAuthenticationDefaults.AuthenticationScheme);
            ClaimsPrincipal principal = new ClaimsPrincipal(identity);

            await httpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);

            return user;
        }

        public void SignOut(HttpContext httpContext)
        {
            httpContext.SignOutAsync();
        }

        private IEnumerable<Claim> GetUserClaims(UserInfo user)
        {
            List<Claim> claims = new List<Claim>();

            claims.Add(new Claim(ClaimTypes.NameIdentifier, user.UserID.ToString()));
            claims.Add(new Claim(ClaimTypes.Name, user.FirstName));
            claims.Add(new Claim(ClaimTypes.Email, user.Email));
            claims.AddRange(this.GetRoleClaims(user));

            return claims;
        }

        private IEnumerable<Claim> GetRoleClaims(UserInfo user)
        {
            List<Claim> claims = new List<Claim>();

            claims.Add(new Claim(ClaimTypes.Role, user.RoleID.ToString()));

            return claims;
        }
    }
}
