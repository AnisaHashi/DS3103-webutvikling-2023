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
    public class TeamsQuizController : ControllerBase
    {
        private readonly TeamsQuizContext _context;

        public TeamsQuizController(TeamsQuizContext context)
        {
            _context = context;
        }

        // GET: api/TeamsQuiz
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeamsQuiz>>> GetTeamsQuizes()
        {
          if (_context.TeamsQuizes == null)
          {
              return NotFound();
          }
            return await _context.TeamsQuizes.ToListAsync();
        }

        // GET: api/TeamsQuiz/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TeamsQuiz>> GetTeamsQuiz(int id)
        {
          if (_context.TeamsQuizes == null)
          {
              return NotFound();
          }
            var teamsQuiz = await _context.TeamsQuizes.FindAsync(id);

            if (teamsQuiz == null)
            {
                return NotFound();
            }

            return teamsQuiz;
        }

        // PUT: api/TeamsQuiz/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeamsQuiz(int id, TeamsQuiz teamsQuiz)
        {
            if (id != teamsQuiz.Id)
            {
                return BadRequest();
            }

            _context.Entry(teamsQuiz).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamsQuizExists(id))
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

        // POST: api/TeamsQuiz
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TeamsQuiz>> PostTeamsQuiz(TeamsQuiz teamsQuiz)
        {
          if (_context.TeamsQuizes == null)
          {
              return Problem("Entity set 'TeamsQuizContext.TeamsQuizes'  is null.");
          }
            _context.TeamsQuizes.Add(teamsQuiz);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeamsQuiz", new { id = teamsQuiz.Id }, teamsQuiz);
        }

        // DELETE: api/TeamsQuiz/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeamsQuiz(int id)
        {
            if (_context.TeamsQuizes == null)
            {
                return NotFound();
            }
            var teamsQuiz = await _context.TeamsQuizes.FindAsync(id);
            if (teamsQuiz == null)
            {
                return NotFound();
            }

            _context.TeamsQuizes.Remove(teamsQuiz);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TeamsQuizExists(int id)
        {
            return (_context.TeamsQuizes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
