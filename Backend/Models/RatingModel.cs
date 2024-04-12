namespace Backend.Models
{
    public class RatingModel
    {
        public int RatingId { get; set; }
        public int ItemId { get; set; }
        public int UserId { get; set; }
        public int Rating { get; set; }
        public bool isRecommended { get; set; }
        public string Comment { get; set; }
    }
}