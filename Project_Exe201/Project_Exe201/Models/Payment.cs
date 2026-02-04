namespace Project_Exe201.Models
{
    public class Payment
    {
        public int PaymentId { get; set; }
        public string PaymentMethod { get; set; } = string.Empty; // Cash, Card, Bank Transfer, E-Wallet
        public DateTime PaymentDate { get; set; } = DateTime.Now;
        public decimal Amount { get; set; }
        public string Status { get; set; } = "Pending"; // Pending, Completed, Failed
        public string? TransactionId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }

        // Foreign Key
        public int OrderId { get; set; }

        // Navigation property
        public Order Order { get; set; } = null!;
    }
}
