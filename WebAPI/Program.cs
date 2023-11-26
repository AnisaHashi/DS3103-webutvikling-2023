using Microsoft.EntityFrameworkCore;

using WebAPI.Models;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<DriverContext>(options => options.UseSqlite("Data source=Driver.db"));
builder.Services.AddDbContext<DriverContext>( 
    options => options
        .UseSqlite("Data Source=Driver.db")
);

builder.Services.AddDbContext<TeamContext>(options => options.UseSqlite("Data source=Team.db"));
builder.Services.AddDbContext<TeamContext>( 
    options => options
        .UseSqlite("Data Source=Team.db")
    );

builder.Services.AddDbContext<TeamsQuizContext>(options => options.UseSqlite("Data source=TeamsQuiz.db"));
builder.Services.AddDbContext<TeamsQuizContext>( 
    options => options
        .UseSqlite("Data Source=TeamQuiz.db") 
);

builder.Services.AddDbContext<DriversQuizContext>(options => options.UseSqlite("Data source=DriversQuiz.db"));
builder.Services.AddDbContext<DriversQuizContext>( 
    options => options
        .UseSqlite("Data Source=DriversQuiz.db") 
);

builder.Services.AddDbContext<RaceContext>(options => options.UseSqlite("Data source=Race.db"));
builder.Services.AddDbContext<RaceContext>( 
    options => options
        .UseSqlite("Data Source=Race.db")
    );

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseStaticFiles();

app.MapControllers();

app.Run();
