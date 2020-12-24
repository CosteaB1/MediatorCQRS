using AutoMapper;
using MediatorCQRS.Core.Intefaces;
using MediatorCQRS.Core.Models.User.Dto;
using MediatorCQRS.Core.Models.User.Queries;
using MediatR;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MediatorCQRS.Core.Models.User.QuryHandler
{
    public class GetAllUsersQueryHandler : IRequestHandler<GetAllUsersQuery, IEnumerable<UserDto>>
    {
        private readonly IRepository<User> _userRepository;
        private readonly IMapper _mapper;
        public GetAllUsersQueryHandler(IRepository<User> userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }
        public async Task<IEnumerable<UserDto>> Handle(GetAllUsersQuery request, CancellationToken cancellationToken)
        {
            var users = _userRepository.Get();
            var result = _mapper.Map<List<UserDto>>(users);
            return await Task.FromResult(result);
        }
    }
}
