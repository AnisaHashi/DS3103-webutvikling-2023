using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models;

public class RaceContext : DbContext
{
    public RaceContext(DbContextOptions<RaceContext> options)
        : base(options)
    {
    }

    public DbSet<Race> Race { get; set; }
}