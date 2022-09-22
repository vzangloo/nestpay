import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly user: UserService) {}

  @Version('1')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.user.findOne(+id);
  }

}
