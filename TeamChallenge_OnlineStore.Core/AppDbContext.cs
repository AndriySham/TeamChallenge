using Microsoft.EntityFrameworkCore;
using TeamChallenge_OnlineStore.Core.Models;

namespace TeamChallenge_OnlineStore.Core
{
    public class AppDbContext : DbContext
    {
        public DbSet<TestData> TestDatas { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }
    }
}
