import axios from "../_lib/axios";
import { Task } from "../_types/Task";

const TaskService = {
  getTasks: async (): Promise<Task[]> => {
    try {
      const { data } = await axios.get("api/task");
      return data?.tasks;
    } catch (e) {
      throw e;
    }
  },
  delTasks: async (id: number): Promise<boolean> => {
    try {
      await axios.delete("api/task", { params: { id } });
      return true;
    } catch (error) {
      return false;
    }
  },
};

export default TaskService;
