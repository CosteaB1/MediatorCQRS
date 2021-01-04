using AutoMapper;
using MediatorCQRS.Core.Intefaces;
using MediatorCQRS.Core.Models.User.Commands;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MediatorCQRS.Core.Models.User.CommandHandler
{
    public class DeleteUserCommandHandler : IRequestHandler<DeleteUserCommand>
    {
        private readonly IRepository<User> _userRepository;
        private readonly IMapper _mapper;
        public DeleteUserCommandHandler(IRepository<User> userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }
        public async Task<Unit> Handle(DeleteUserCommand request, CancellationToken cancellationToken)
        {
            var getById = _userRepository.FindById(request.Id);
            if (getById != null)
            {
                _userRepository.Remove(getById);
            }
            else
            {
                throw new Exception("This user does not exist");
            }
            return await Unit.Task;
        }
    }
}
