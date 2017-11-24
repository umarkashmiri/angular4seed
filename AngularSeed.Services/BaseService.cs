using Angular4Seed.Data;
using Angular4Seed.IServices;
using Angular4Seed.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AngularSeed.Services
{
    public class BaseService<T> : IBaseService<T> where T : class
    {
        protected AppDataContext _dataContext;

        public BaseService(AppDataContext context)
        {
            _dataContext = context;
        }

        public void Add(T entity)
        {
            _dataContext.Set<T>().Add(entity);
            _dataContext.SaveChanges();
        }

        public IEnumerable<T> Get()
        {
            return _dataContext.Set<T>().ToList();
        }

        public IEnumerable<T> GetAll()
        {
            return _dataContext.Set<T>().ToList();
        }

        public void Update()
        {
            throw new NotImplementedException();
        }
    }
}
