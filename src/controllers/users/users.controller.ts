import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return 'this is find all get request';
    }
    @Get(':id')
    getById(@Param('id') id) {
        return `get id: ${id}`;
    }
}
