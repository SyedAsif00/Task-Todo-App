export interface Task {
  id: number;
  title: string;
  color: string | null;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
