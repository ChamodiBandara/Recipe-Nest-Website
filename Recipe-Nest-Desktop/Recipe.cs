public class Recipe
{
    public string ItemID { get; set; }
    public string ItemName { get; set; }
    public string Date { get; set; }
    public string ItemCategory { get; set; }

    // Constructor to initialize properties
    public Recipe()
    {
        ItemID = string.Empty;
        ItemName = string.Empty;
        Date = string.Empty;
        ItemCategory = string.Empty;
    }
}