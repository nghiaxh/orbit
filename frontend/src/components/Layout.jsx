import { Outlet } from "react-router";
import { PanelLeftOpen, BellDot, Info } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Searchbar from "@/components/Searchbar";
function Layout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <label htmlFor="my-drawer-3" className="btn-ghost drawer-button mx-4 lg:hidden">
              <PanelLeftOpen />
            </label>
          </div>
          <div className="navbar-center">
            <Searchbar></Searchbar>
          </div>
          <div className="navbar-end flex mr-4 gap-4">
            <BellDot className="cursor-pointer" />
            <Info className="cursor-pointer" />
          </div>
        </div>
        {/* Page content here */}
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side shadow-sm">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default Layout;
