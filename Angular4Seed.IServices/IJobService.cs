using Angular4Seed.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Angular4Seed.IServices
{
    public interface IJobService : IBaseService<Job>
    {
        IEnumerable<Job> SearchJob();
    }
}
