using MediatorCQRS.Core.Models.User.Dto;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace MediatorCQRS.Core.Models.User.Commands
{
    public class CreateUserCommand : IRequest <UserDto>
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Discount { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public int Age { get; set; }
    }
}
