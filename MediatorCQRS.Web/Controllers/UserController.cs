using AutoMapper;
using MediatorCQRS.Core.Intefaces;
using MediatorCQRS.Core.Models.User;
using MediatorCQRS.Core.Models.User.Commands;
using MediatorCQRS.Core.Models.User.Dto;
using MediatorCQRS.Core.Models.User.Queries;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MediatorCQRS.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public UserController(IMapper mapper, IMediator mediator)
        {
            _mapper = mapper;
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var query = new GetAllUsersQuery();
            var dto = await _mediator.Send(query);
            return Ok(dto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var query = new GetUserByIdQuery(id);
            var result = await _mediator.Send(query);
            return result != null ? (IActionResult)Ok(result) : NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] CreateUserCommand command)
        {
            var result = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var query = new DeleteUserCommand(id);
            await _mediator.Send(query);
            return NoContent();
        }
        [HttpPatch("{id}")]
        public async Task<IActionResult> UpdateUser(int id,[FromBody] UpdateUserCommand command)
        {
            command.Id = id;
            var result = await _mediator.Send(command);
            return Ok(result);
        }
    }
}
