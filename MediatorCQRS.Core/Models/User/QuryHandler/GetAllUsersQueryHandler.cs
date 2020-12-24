using MediatorCQRS.Core.Models.User.Dto;
using MediatorCQRS.Core.Models.User.Queries;
using MediatR;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace MediatorCQRS.Core.Models.User.QuryHandler
{
    public class GetAllUsersQueryHandler : IRequestHandler<GetAllUsersQuery, IEnumerable<UserDto>>
    {
        public Task<IEnumerable<UserDto>> Handle(GetAllUsersQuery request, CancellationToken cancellationToken)
        {
        
        }
    }
}
