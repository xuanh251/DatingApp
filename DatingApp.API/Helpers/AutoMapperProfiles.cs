using System;
using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
            .ForMember(desc => desc.PhotoUrl, opt =>
            {
                opt.MapFrom(src => src.Photos.FirstOrDefault(s => s.IsMain).Url);
            })
            .ForMember(desc => desc.Age, opt =>
            {
                opt.MapFrom(src => src.DateOfBirth.CalculateAge());
            });
            CreateMap<User, UserForDetailDto>()
            .ForMember(desc => desc.PhotoUrl, opt =>
            {
                opt.MapFrom(src => src.Photos.FirstOrDefault(s => s.IsMain).Url);
            })
            .ForMember(desc => desc.Age, opt =>
            {
                opt.MapFrom(src => src.DateOfBirth.CalculateAge());
            });;
            CreateMap<Photo, PhotoForDetailDto>();
        }
    }
}