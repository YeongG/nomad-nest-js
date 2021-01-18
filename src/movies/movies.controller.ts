import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie, ReqCreateMovie } from './movies.types';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesSrvice: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesSrvice.getAll();
  }

  @Get('/search')
  search(@Query('title') title: string) {
    return this.moviesSrvice.search(title);
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesSrvice.getOne(id);
  }

  @Post()
  create(@Body() movieData: ReqCreateMovie) {
    return this.moviesSrvice.create(movieData);
  }

  @Delete('/:id')
  movie(@Param('id') id: string) {
    return this.moviesSrvice.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: string, @Body() movieData) {
    return this.moviesSrvice.update(id, movieData);
  }
}
