import { IsNumber, IsString } from 'class-validator';

export interface Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}

export class ReqCreateMovie {
  @IsString()
  title: string;

  @IsNumber()
  year: number;

  @IsString({ each: true })
  genres: string[];
}
