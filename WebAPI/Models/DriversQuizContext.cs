#nullable disable
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models;

public class DriversQuizContext: DbContext {
    public DriversQuizContext (DbContextOptions<DriversQuizContext> options): base (options) 
{

}

public DbSet<DriversQuiz> DriversQuiz {get; set;}
}