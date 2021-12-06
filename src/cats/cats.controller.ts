import { Controller, Get, Param, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { createCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get(':id')
  findOne(@Param() params): string {
    // console.log('watch');
    return `This actions returns a #${params.id} cat`;
  }

  // @Post()
  // create(): string {
  //   return 'this actions adds a new cat';
  // }

  @Post()
  async create(@Body() createCatDto: createCatDto) {
    return `This actions adds a new cat `;
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
