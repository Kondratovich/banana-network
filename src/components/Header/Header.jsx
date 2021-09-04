import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className={s.img}
        src="https://svgsilh.com/svg/2491236-ffc107.svg"
        alt="logo"
      ></img>
      <div className={s.loginBlock}>
        {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div> : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
