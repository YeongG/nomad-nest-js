import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie, ReqCreateMovie } from './movies.types';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  private movieId: number = 1;

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === parseInt(id));
    if (!movie) throw new NotFoundException(`Movie with ID ${id} not found.`);
    return movie;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
  }

  search(title: string): Movie[] {
    return this.movies.filter((movie) => movie.title.includes(title));
  }

  create(movieData: ReqCreateMovie): void {
    this.movies.push({
      id: this.movieId++,
      ...movieData,
    });
  }

  update(id: string, updateData) {
    this.getOne(id);
    this.movies = this.movies.map((movie) =>
      movie.id === parseInt(id) ? { ...movie, ...updateData } : movie,
    );
  }
}
