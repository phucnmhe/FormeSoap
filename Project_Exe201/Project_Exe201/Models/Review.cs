namespace Project_Exe201.Models
{
    public class Review
    {
        public int ReviewId { get; set; }
        public int Rating { get; set; } // 1-5 stars
        public string? Comment { get; set; }
        public DateTime ReviewDate { get; set; } = DateTime.Now;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }

        // Foreign Keys
        public int ProductId { get; set; }
        public int CustomerId { get; set; }

        // Navigation properties
        public Product Product { get; set; } = null!;
        public Customer Customer { get; set; } = null!;
    }
}
