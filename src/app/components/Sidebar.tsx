import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Settings } from "lucide-react"

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`
        ${isCollapsed ? "w-20" : "w-64"}
        bg-white shadow-md flex flex-col transition-all duration-300 ease-in-out
        `}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && <div className="text-2xl font-bold">Warehouse</div>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          <span className="text-gray-500">{isCollapsed ? "»" : "«"}</span>
        </button>
      </div>

      <nav className="flex-1 p-2">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className={`
                flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition
                ${location.pathname === "/dashboard" ? "bg-gray-200 fontmedium" : ""}
              `}
            >
              <LayoutDashboard size={22} />
              {!isCollapsed && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`
                flex items-center gap-3 p-1 rounded-md hover:bg-gray-100 transition
                ${location.pathname === "/settings" ? "bg-gray-200 font-medium" : ""}  
              `}
            >
              <Settings size={22} />
              {!isCollapsed && <span>Configuration</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar;