import { NavLink } from "react-router";
import { Plus, Notebook, Star, Settings, CircleUserRound, LogOut } from "lucide-react";

function Sidebar() {
  return (
    <>
      <ul className="flex flex-col grow menu bg-base-100 min-h-full w-64 p-4 gap-2">
        {/* Sidebar content here */}
        <li>
          <NavLink to="/new">
            <Plus />
            New Note
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <Notebook />
            All Notes
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
            <Star />
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <Settings />
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/account">
            <CircleUserRound />
            Account Info
          </NavLink>
        </li>
        <li>
          <NavLink>
            <LogOut />
            Log Out
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
