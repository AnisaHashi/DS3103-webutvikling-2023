using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models;

public class TeamContext : DbContext
{
    public TeamContext(DbContextOptions<TeamContext> options)
        : base(options)
    {
    }

    public DbSet<Team> Team { get; set; } = null!;
}