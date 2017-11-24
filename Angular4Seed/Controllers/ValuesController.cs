using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular4Seed.Data;
using Angular4Seed.IServices;

namespace Angular4Seed.Controllers
{
  [Route("api/[controller]")]
  public class ValuesController : Controller
  {
    private IJobService _jobService;
    public ValuesController(IJobService jobService)
    {
      _jobService = jobService;
    }
    // GET api/values
    [HttpGet]
    public IActionResult Get()
    {
      return Ok(_jobService.GetAll());
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody]Models.Job model)
    {
      _jobService.Add(model);
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
