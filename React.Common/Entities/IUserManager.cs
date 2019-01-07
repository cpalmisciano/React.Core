using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace React.Common.Entities
{
    public interface IUserManager
    {
        Task<UserInfo> SignInAsync(HttpContext httpContext, UserInfo user);

        void SignOut(HttpContext httpContext);
    }
}
