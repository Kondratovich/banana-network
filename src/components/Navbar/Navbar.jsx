import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
      <nav className={s.nav}>
        <div>
          <NavLink className={s.item} activeClassName={s.active} to="/profile">Profile</NavLink>
        </div>
        <div>
          <NavLink className={s.item} activeClassName={s.active} to="/dialogs">Messages</NavLink>
        </div>
        <div>
          <NavLink className={s.item} activeClassName={s.active} to="/users">Users</NavLink>
        </div>
        <div>
          <NavLink className={s.item} to="#c">News</NavLink>
        </div>
        <div>
          <NavLink className={s.item} to="#c">Music</NavLink>
        </div>
        <div>
          <NavLink className={s.item} to="#c">Settings</NavLink>
        </div>
      </nav>
    );
}

export default Navbar