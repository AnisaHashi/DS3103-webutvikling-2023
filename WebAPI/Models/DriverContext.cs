using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models;

public class DriverContext : DbContext
{
    public DriverContext(DbContextOptions<DriverContext> options)
        : base(options)
    {
    }

    public DbSet<Driver> Driver { get; set; } = null!;
}