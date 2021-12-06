import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get(':id')
  findOne(@Param() params): string {
    console.log('watch');
    return `This actions returns a #${params.id} cat`;
  }

  // @Get()
  // ddd(): string {
  //   return 'xxx';
  // }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
