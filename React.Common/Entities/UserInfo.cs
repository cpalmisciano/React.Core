namespace React.Common.Entities
{
    public class UserInfo
    {
        public int UserID { get; set; }
        public int RoleID { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public string UserName { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}
