using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace MediatorCQRS.Core.Models.User.Commands
{
    public class DeleteUserCommand : IRequest
    {
        public int Id { get; set; }
        public DeleteUserCommand(int _id)
        {
            Id = _id;
        }
    }
}
