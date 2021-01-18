import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie, ReqCreateMovie, ReqUpdateMovie } from './movies.types';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesSrvice: MoviesService) {}

  //메소드 데코레이터
  @Get()
  getAll(): Movie[] {
    return this.moviesSrvice.getAll();
  }

  @Get('/search')
  search(@Query('title') title: string) {
    return this.moviesSrvice.search(title);
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesSrvice.getOne(id);
  }

  @Post()
  create(@Body() movieData: ReqCreateMovie) {
    return this.moviesSrvice.create(movieData);
  }

  @Delete('/:id')
  movie(@Param('id') id: number) {
    return this.moviesSrvice.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: number, @Body() movieData: ReqUpdateMovie) {
    return this.moviesSrvice.update(id, movieData);
  }
}
