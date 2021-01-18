export interface Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}

export class ReqCreateMovie {
  title: string;
  year: number;
  genres: string[];
}
