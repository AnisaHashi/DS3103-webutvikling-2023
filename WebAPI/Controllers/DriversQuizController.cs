using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriversQuizController : ControllerBase
    {
        private readonly DriversQuizContext _context;

        public DriversQuizController(DriversQuizContext context)
        {
            _context = context;
        }

        // GET: api/DriversQuiz
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DriversQuiz>>> GetDriversQuiz()
        {
          if (_context.DriversQuiz == null)
          {
              return NotFound();
          }
            return await _context.DriversQuiz.ToListAsync();
        }

        // GET: api/DriversQuiz/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DriversQuiz>> GetDriversQuiz(int id)
        {
          if (_context.DriversQuiz == null)
          {
              return NotFound();
          }
            var driversQuiz = await _context.DriversQuiz.FindAsync(id);

            if (driversQuiz == null)
            {
                return NotFound();
            }

            return driversQuiz;
        }

        // PUT: api/DriversQuiz/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDriversQuiz(int id, DriversQuiz driversQuiz)
        {
            if (id != driversQuiz.Id)
            {
                return BadRequest();
            }

            _context.Entry(driversQuiz).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DriversQuizExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DriversQuiz
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DriversQuiz>> PostDriversQuiz(DriversQuiz driversQuiz)
        {
          if (_context.DriversQuiz == null)
          {
              return Problem("Entity set 'DriversQuizContext.DriversQuiz'  is null.");
          }
            _context.DriversQuiz.Add(driversQuiz);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDriversQuiz", new { id = driversQuiz.Id }, driversQuiz);
        }

        // DELETE: api/DriversQuiz/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDriversQuiz(int id)
        {
            if (_context.DriversQuiz == null)
            {
                return NotFound();
            }
            var driversQuiz = await _context.DriversQuiz.FindAsync(id);
            if (driversQuiz == null)
            {
                return NotFound();
            }

            _context.DriversQuiz.Remove(driversQuiz);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DriversQuizExists(int id)
        {
            return (_context.DriversQuiz?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
