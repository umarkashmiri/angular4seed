using Angular4Seed.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace Angular4Seed.Data
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
        {

        }
        public DbSet<Job> Jobs { get; set; }
    }
}
