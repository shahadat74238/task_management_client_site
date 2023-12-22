import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user.displayName);

  return (
    <div className="container min-h-screen mx-auto gap-6 grid grid-cols-8">
      <div className="col-span-2 border bg-gray-200 p-10 ">
        <div className="mb-10">
          <div tabIndex={0} className="avatar  hover:cursor-pointer">
            <div className="h-28 rounded-full">
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                }
              />
            </div>
          </div>
          <p className="text-xl mt-5 mb-2  font-semibold ">
            {user?.displayName ? user?.displayName : "UserName"}
          </p>
        </div>
        <hr className="border border-stone-800 my-5" />
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard/allTask"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-semibold text-lg uppercase"
                  : " font-semibold text-lg uppercase"
              }
            >
              All Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/Post"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-semibold text-lg uppercase"
                  : " font-semibold text-lg uppercase"
              }
            >
              Post Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/previous"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-semibold text-lg uppercase"
                  : " font-semibold text-lg uppercase"
              }
            >
              Previous Task
            </NavLink>
          </li>
        </ul>

        <hr className="border border-stone-800 my-5" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-semibold text-lg uppercase"
                  : " font-semibold text-lg uppercase"
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-span-6 border p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
