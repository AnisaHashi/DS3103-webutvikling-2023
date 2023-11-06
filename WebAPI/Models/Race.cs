namespace WebAPI.Models;

public class Race
{
    public long Id { get; set; }
    public string? WinnerName { get; set; }
    public long  WinnerTime { get; set; }
    public string? GrandPrix{ get; set; }
    public long NumberOfLaps  { get; set; }
    
}