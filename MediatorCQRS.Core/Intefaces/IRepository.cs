using MediatorCQRS.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MediatorCQRS.Core.Intefaces
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Add(TEntity item);
        TEntity FindById(int id);
        IQueryable<TEntity> Get();
        IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate);
        void Remove(TEntity item);
        void Update(TEntity item);
    }
}
