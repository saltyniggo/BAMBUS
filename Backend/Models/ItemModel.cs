namespace Backend.Models

{
    public class ItemModel
    {
        public int ItemId { get; set; }
        public List<int> Reservations { get; set; }
        public condition Condition { get; set; }
        public int CurrentLoanId { get; set; }
        public string Title { get; set; }
    }
}