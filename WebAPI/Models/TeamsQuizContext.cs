#nullable disable
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models;

public class TeamsQuizContext: DbContext {
    public TeamsQuizContext (DbContextOptions<TeamsQuizContext> options): base (options) 
{

}

public DbSet<TeamsQuiz> TeamsQuizes {get; set;}
}