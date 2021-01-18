import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie, ReqCreateMovie, ReqUpdateMovie } from './movies.types';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  private movieId: number = 1;

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) throw new NotFoundException(`Movie with ID ${id} not found.`);
    // nestjs에서 제공하는 에러
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
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

  update(id: number, updateData: ReqUpdateMovie) {
    this.getOne(id);
    this.movies = this.movies.map((movie) =>
      movie.id === id ? { ...movie, ...updateData } : movie,
    );
  }
}
