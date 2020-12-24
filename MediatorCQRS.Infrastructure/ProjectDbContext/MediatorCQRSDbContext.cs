using Microsoft.EntityFrameworkCore;
using MediatorCQRS.Core.Models.User;

namespace MediatorCQRS.Infrastructure.ProjectDbContext
{
    public class MediatorCQRSDbContext : DbContext
    {
        public MediatorCQRSDbContext()
        {
        }
        public MediatorCQRSDbContext(DbContextOptions<MediatorCQRSDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
        public virtual DbSet<User> Users { get; set; }
    }
}
