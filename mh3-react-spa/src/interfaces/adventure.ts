import { Book } from "./book";

export interface Adventure {
  _id: string;
  title: string;
  book?: Book | null;
  img: string;
  phases: Array<any>;
  points: number;
  progressClass?: any;
  featuredStudents?: any;
}