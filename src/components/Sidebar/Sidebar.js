import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import menuItems from "./menuItems";
const Sidebar = () => {
  let location = useLocation();

  return (
    <>
      <aside className="menu column is-2 section">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          {menuItems.map((item, idx) => (
            <li>
              <Link
                to={item.to}
                className={location.pathname == item.to ? "is-active" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="menu-label">Administration</p>
        <ul className="menu-list">
          <li>
            <Link to="#">Team Settings</Link>
          </li>
          <li>
            <Link to="#">Manage Your Team</Link>
            <ul>
              <li>
                <Link to="#">Members</Link>
              </li>
              <li>
                <Link to="#">Plugins</Link>
              </li>
              <li>
                <Link to="#">Add a member</Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
