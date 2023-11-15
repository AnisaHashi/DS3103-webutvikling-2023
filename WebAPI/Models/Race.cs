namespace WebAPI.Models;

public class Race
{
    public long Id { get; set; }
    public string? WinnerName { get; set; }
    public DateTime WinnerTime { get; set; } //Date
    public string? GrandPrix{ get; set; }
    public long NumberOfLaps  { get; set; }
    
}