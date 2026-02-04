namespace Project_Exe201.Models
{
    public class StockTransaction
    {
        public int StockTransactionId { get; set; }
        public string TransactionType { get; set; } = string.Empty; // IN, OUT
        public int Quantity { get; set; }
        public DateTime TransactionDate { get; set; } = DateTime.Now;
        public string? Notes { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        // Foreign Key
        public int ProductId { get; set; }

        // Navigation property
        public Product Product { get; set; } = null!;
    }
}
