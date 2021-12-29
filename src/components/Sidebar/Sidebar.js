import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import generalMenuItems from "./generalMenuItems";
import administrationMenuItems from "./administrationMenuItems";
const Sidebar = () => {
  let location = useLocation();

  return (
    <>
      <aside className="menu column is-2 section">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          {generalMenuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.to}
                key={idx}
                className={location.pathname === item.to ? "is-active" : ""}
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
            <Link to="#">Configuration</Link>
            <ul>
              {administrationMenuItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    key={idx}
                    className={location.pathname === item.to ? "is-active" : ""}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
