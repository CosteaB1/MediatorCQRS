﻿
namespace MediatorCQRS.Core.Models.User
{
    public class User : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Discount { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int Age { get; set; }
        public string IdentityId { get; set; }

    }
}
