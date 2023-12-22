import { Link } from "react-router-dom";
import taskImg from "../../assets/task.svg";
import useAuth from "../../Hooks/useAuth";

const Banner = () => {
   const {user} = useAuth();
  return (
    <div className="min-h-screen grid grid-cols-2 items-center md:gap-20 gap-5 justify-between container mx-auto p-5 ">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase">
          {" "}
          Manage Your <span className="text-[#6C63FF]">Task</span>{" "}
        </h1>
        <p className="w-96 text-justify mt-5 lg:text-lg text-gray-500">
          Task management is the organized approach to planning, tracking, and
          completing tasks efficiently. It involves creating task lists, setting
          priorities, assigning responsibilities, and establishing deadlines.
        </p>
        <Link to={user ? "/dashboard/allTask" : "/login"}>
          <button className="btn btn-outline mt-5 lg:mt-10 rounded-none lg:text-xl font-medium ">
            Let’s Explore
          </button>
        </Link>
      </div>
      <div className="">
        <img src={taskImg} alt="Loading image" />
      </div>
    </div>
  );
};

export default Banner;
