using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project_Exe201.Data;
using Project_Exe201.Models;

namespace Project_Exe201.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest(new { message = "Username and password are required" });
            }

            // Find account by username or email
            var account = await _context.Accounts
                .Include(a => a.Role)
                .Include(a => a.Customer)
                .FirstOrDefaultAsync(a => a.Username == request.Username || a.Email == request.Username);

            if (account == null)
            {
                return Unauthorized(new { message = "Invalid username or password" });
            }

            // Verify password
            if (!account.VerifyPassword(request.Password))
            {
                return Unauthorized(new { message = "Invalid username or password" });
            }

            // Check if account is active
            if (!account.IsActive)
            {
                return Unauthorized(new { message = "Account is disabled" });
            }

            // Return user info (without password)
            return Ok(new
            {
                accountId = account.AccountId,
                username = account.Username,
                email = account.Email,
                fullName = account.FullName,
                role = account.Role.RoleName,
                customerId = account.CustomerId,
                message = "Login successful"
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            // Validate request
            if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest(new { message = "All fields are required" });
            }

            // Check if username exists
            if (await _context.Accounts.AnyAsync(a => a.Username == request.Username))
            {
                return BadRequest(new { message = "Username already exists" });
            }

            // Check if email exists
            if (await _context.Accounts.AnyAsync(a => a.Email == request.Email))
            {
                return BadRequest(new { message = "Email already exists" });
            }

            // Create new account
            var account = new Account
            {
                Username = request.Username,
                Email = request.Email,
                PasswordHash = Account.HashPassword(request.Password),
                FullName = request.FullName,
                RoleId = 2, // Default to User role
                IsActive = true,
                CreatedAt = DateTime.Now
            };

            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Registration successful" });
        }
    }

    public class LoginRequest
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class RegisterRequest
    {
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string? FullName { get; set; }
    }
}
