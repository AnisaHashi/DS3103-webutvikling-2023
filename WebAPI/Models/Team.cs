namespace WebAPI.Models;

public class Team
{
    public long Id { get; set; }
    public string? Manufacturer { get; set; }
    public string? DriverOne { get; set; }
    public string? DriverTwo { get; set; }
}