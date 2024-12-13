import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";


function Navigation() {

    const location = useLocation();
    const isActivePage = (path) => location.pathname === path && "border-b-4 border-[#295270]"

    const linkClass = "hover:bg-[#448ABC] p-2 rounded-md hover:text-white hover:border-none"
   
  return (
            <nav>
                <ul className="flex space-x-4 justify-center">
                    <li>
                        <Link to="/alyeqeenTaskTracker/mytasks"
                        className={`${linkClass} ${isActivePage("/alyeqeenTaskTracker/mytasks")}`}>My Tasks</Link>
                    </li>
                    <li>
                        <Link to="/alyeqeenTaskTracker/dashboard"
                        className={`${linkClass} ${isActivePage("/alyeqeenTaskTracker/dashboard")}`}>Dashboard</Link>
                    </li>

                </ul>
            </nav>

    
  )
}

export default Navigation
