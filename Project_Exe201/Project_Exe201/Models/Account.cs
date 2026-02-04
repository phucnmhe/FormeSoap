using System.Security.Cryptography;
using System.Text;

namespace Project_Exe201.Models
{
    public class Account
    {
        public int AccountId { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string? FullName { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }

        // Foreign Keys
        public int RoleId { get; set; }
        public int? CustomerId { get; set; } // Optional - link to Customer if this is a customer account

        // Navigation properties
        public Role Role { get; set; } = null!;
        public Customer? Customer { get; set; }

        // Helper method to hash password
        public static string HashPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return Convert.ToBase64String(hashedBytes);
            }
        }

        // Helper method to verify password
        public bool VerifyPassword(string password)
        {
            var hashedInput = HashPassword(password);
            return hashedInput == PasswordHash;
        }
    }
}
