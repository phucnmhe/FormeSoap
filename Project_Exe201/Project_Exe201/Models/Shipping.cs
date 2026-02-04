namespace Project_Exe201.Models
{
    public class Shipping
    {
        public int ShippingId { get; set; }
        public string ShippingAddress { get; set; } = string.Empty;
        public string ShippingMethod { get; set; } = string.Empty; // Standard, Express, Same Day
        public decimal ShippingCost { get; set; }
        public DateTime? EstimatedDeliveryDate { get; set; }
        public DateTime? ActualDeliveryDate { get; set; }
        public string Status { get; set; } = "Pending"; // Pending, In Transit, Delivered
        public string? TrackingNumber { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }

        // Foreign Key
        public int OrderId { get; set; }

        // Navigation property
        public Order Order { get; set; } = null!;
    }
}
