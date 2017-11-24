using Angular4Seed.IServices;
using Angular4Seed.Models;
using System;
using Angular4Seed.Data;
using System.Collections.Generic;

namespace AngularSeed.Services
{
    public class JobService : BaseService<Job>, IJobService
    {
        public JobService(AppDataContext context) : base(context)
        {
            
        }

        public IEnumerable<Job> SearchJob()
        {
            return null;
        }
    }
}
