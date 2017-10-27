using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angular4Seed.Controllers
{
  [Produces("application/json")]
  [Route("api/jobs")]
  public class JobsController : Controller
  {
    public List<Job> Jobs = new List<Job>() {
      new Job() { Id = 1, Title = "Software Engineer", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 2, Title = "Teacher", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 3, Title = "Doctor", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 4, Title = "Fashion", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 5, Title = "Nurse", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 6, Title = "Actor", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 7, Title = "Cook", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 8, Title = "Software Engineer", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 9, Title = "Software Engineer", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 10, Title = "Software Engineer", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 11, Title = "Software Engineer", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 12, Title = "Software Engineer", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
      new Job() { Id = 14, Title = "Software Engineer", Description = "This is test description", PostedDate = DateTime.Now.AddDays(-1) },
    };

    [HttpGet("all")]
    public IActionResult GetJobs()
    {
      return Ok(Jobs);
    }
    [HttpGet("search/{keyword}")]
    public IActionResult GetJobs(string keyword)
    {
      return Ok(Jobs.Where(j => j.Title.ToLower().Contains(keyword.ToLower())));
    }
  }

  public class Job
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime PostedDate { get; set; }
  }

}
