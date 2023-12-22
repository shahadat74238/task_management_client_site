import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("/tasks");
      setTasks(res.data);
    };
    data();
  }, [axios]);

  return (
    <div>
      <h1 className="text-center text-5xl font-semibold ">All task</h1>
      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <div className="border p-5" key={task._id}>
            <h1 className="text-2xl font-semibold">{task.title}</h1>
            <h1 className="text-gray-500">{task.date}</h1>
            <h1 className="text-gray-500">{task.priority}</h1>
            <h1 className="text-gray-500">{task.des}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
