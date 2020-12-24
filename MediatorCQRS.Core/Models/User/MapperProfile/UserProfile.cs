using AutoMapper;
using MediatorCQRS.Core.Models.User.Dto;

namespace MediatorCQRS.Core.Models.User.MapperProfile
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDto>();
        }
    }
}
