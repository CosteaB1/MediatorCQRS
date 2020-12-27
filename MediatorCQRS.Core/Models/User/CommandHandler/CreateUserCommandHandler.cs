using AutoMapper;
using MediatorCQRS.Core.Intefaces;
using MediatorCQRS.Core.Models.User.Commands;
using MediatorCQRS.Core.Models.User.Dto;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MediatorCQRS.Core.Models.User.CommandHandler
{
    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, UserDto>
    {
        private readonly IRepository<User> _userRepository;
        private readonly IMapper _mapper;
        public CreateUserCommandHandler(IRepository<User> userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<UserDto> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var newUser = new User
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Age = request.Age,
                Discount = request.Discount,
                Email = request.Email,
                PhoneNumber = request.PhoneNumber
            };
            _userRepository.Add(newUser);
            var result = _mapper.Map<UserDto>(newUser);
            return await Task.FromResult(result);
        }
    }
}
