using AutoMapper;
using MediatorCQRS.Core.Intefaces;
using MediatorCQRS.Core.Models.User.Dto;
using MediatorCQRS.Core.Models.User.Queries;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MediatorCQRS.Core.Models.User.QuryHandler
{
    class GetUserByIdHandler : IRequestHandler<GetUserByIdQuery, UserDto>
    {
        private readonly IRepository<User> _userRepository;
        private readonly IMapper _mapper;
        public GetUserByIdHandler (IRepository<User> userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;

        }
    public async Task<UserDto> Handle(GetUserByIdQuery request, CancellationToken cancellationToken)
    {
            var user = _userRepository.FindById(request.Id);
            var result = _mapper.Map<UserDto>(user);
            return await Task.FromResult(result);
        }
}
}
