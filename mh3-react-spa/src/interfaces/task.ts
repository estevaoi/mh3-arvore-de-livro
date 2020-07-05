export interface Task {
  _id: string;
  title: string;
  description: string;
  status?: 'ok' | null;
  questions: any[];
  rightAnswer: any;
  answer?: any;
}