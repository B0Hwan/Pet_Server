import { Controller, Get, Param, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from '../interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param() params): string {
  //   // console.log('watch');
  //   return `This actions returns a #${params.id} cat`;
  // }
  //
  // // @Post()
  // // create(): string {
  // //   return 'this actions adds a new cat';
  // // }
  //
  // @Post()
  // async create(@Body() createCatDto: createCatDto) {
  //   return `This actions adds a new cat `;
  // }
  //
  // @Get()
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all cats';
  // }
}
