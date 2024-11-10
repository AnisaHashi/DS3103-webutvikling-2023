using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models;

public class Driver
{
    [Key]
    public long Id { get; set; }
    public long Age { get; set; }
    public string? Name { get; set; }
    public string? Nationality { get; set; }
    //Image

    public string? Image { get; set; }


}