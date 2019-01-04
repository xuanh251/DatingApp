using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForLoginDto
    {
        [Required]
        public string username { get; set; }
        [Required]
        public string password { get; set; }
    }
}