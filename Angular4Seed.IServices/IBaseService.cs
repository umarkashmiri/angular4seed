using System;
using System.Collections.Generic;
using System.Text;

namespace Angular4Seed.IServices
{
    public interface IBaseService<T>
    {
        IEnumerable<T> Get();
        IEnumerable<T> GetAll();
        void Update();
        void Add(T entity);
    }
}
