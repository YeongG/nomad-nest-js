import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export interface Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}

export class ReqCreateMovie {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}

export class ReqUpdateMovie extends PartialType(ReqCreateMovie) {}
// PartialType을 사용해서 필드는 똑같지만 필수가 아닌 클래스를 생성해준다
