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
    class UpdateUserCommandHandler : IRequestHandler<UpdateUserCommand, UserDto>
    {
        private readonly IRepository<User> _userRepository;
        private readonly IMapper _mapper;

        public UpdateUserCommandHandler(IRepository<User> userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;

        }
        public async Task<UserDto> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
        {
            var getUser = _userRepository.FindById(request.Id);

            if (getUser != null)
            {
                if (!string.IsNullOrWhiteSpace(request.FirstName))
                {
                    getUser.FirstName = request.FirstName;
                }
                if (!string.IsNullOrWhiteSpace(request.LastName))
                {
                    getUser.LastName = request.LastName;
                }
                if (!string.IsNullOrWhiteSpace(request.Email))
                {
                    getUser.Email = request.Email;
                }
                if (!string.IsNullOrWhiteSpace(request.PhoneNumber))
                {
                    getUser.PhoneNumber = request.PhoneNumber;
                }
                if (request.Age.HasValue)
                {
                    getUser.Age = (int)request.Age;
                }
                if (request.Discount.HasValue)
                {
                    getUser.Discount = (int)request.Discount;
                }
                _userRepository.Update(getUser);
            }
            var result = _mapper.Map<UserDto>(getUser);
            return result;

        }
    }
}
