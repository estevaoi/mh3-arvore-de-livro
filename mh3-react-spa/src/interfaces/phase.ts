export interface Phase {
  _id: string;
  title: string;
  img: string;
  tasks: any;
  status?: 'ok' | null;
  description: string;
}