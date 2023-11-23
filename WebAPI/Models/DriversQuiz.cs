using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models;
public class DriversQuiz
{
     public int Id { get; set; } // Primary key
    public string Question { get; set; }

    [NotMapped]
    public List<string> Alternatives { get; set; }

    public string Answer { get; set; }
}
