using MediatorCQRS.Core.Models.User.Dto;
using MediatR;
using System.Collections.Generic;

namespace MediatorCQRS.Core.Models.User.Queries
{
    public class GetUserByIdQuery : IRequest<UserDto>
    {
        public int Id { get; set; }

        public GetUserByIdQuery(int _id)
        {
            Id = _id;
        }
    }
}
