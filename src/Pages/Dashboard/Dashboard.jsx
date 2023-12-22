import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container min-h-screen mx-auto gap-6 grid grid-cols-8">
      <div className="col-span-2 border bg-gray-200 p-10 ">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-semibold text-lg uppercase"
                  : " font-semibold text-lg uppercase"
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/paymentHistory"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-semibold text-lg uppercase"
                  : " font-semibold text-lg uppercase"
              }
            >
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/workSheet"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-semibold text-lg uppercase"
                  : " font-semibold text-lg uppercase"
              }
            >
              Work Sheet
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
