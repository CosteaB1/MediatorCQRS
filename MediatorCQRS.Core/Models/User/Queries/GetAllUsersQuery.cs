using MediatorCQRS.Core.Models.User.Dto;
using MediatR;
using System.Collections.Generic;
using System.Linq;

namespace MediatorCQRS.Core.Models.User.Queries
{
    public class GetAllUsersQuery : IRequest<IEnumerable<UserDto>>
    {
    }
}
