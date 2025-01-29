import axios from "../_lib/axios";

const TaskService = {
  getTasks: async (): Promise<any> => {
    try {
      const { data } = await axios.get("api/task");
      return data?.tasks;
    } catch (e) {
      throw e;
    }
  },
};

export default TaskService;
