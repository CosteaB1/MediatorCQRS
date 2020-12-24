using MediatorCQRS.Core.Intefaces;
using MediatorCQRS.Infrastructure.ProjectDbContext;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace MediatorCQRS.Infrastructure.Data
{
    public class EfRepository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        readonly MediatorCQRSDbContext _context;
        readonly DbSet<TEntity> _dbSet;

        public EfRepository(MediatorCQRSDbContext context)
        {
            _context = context;
            _dbSet = context.Set<TEntity>();
        }

        public IQueryable<TEntity> Get()
        {
            return _dbSet;
        }

        public IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate)
        {
            return _dbSet.Where(predicate);
        }
        public TEntity FindById(int id)
        {
            return _dbSet.Find(id);
        }

        public TEntity Add(TEntity item)
        {

            var entity = _dbSet.Add(item);
            _context.SaveChanges();  // de scos intr-o metoda aparte 
            return entity.Entity;
        }
        public void Update(TEntity item)
        {
            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();
        }
        public void Remove(TEntity item)
        {
            _dbSet.Remove(item);
            _context.SaveChanges();
        }


    }

}
