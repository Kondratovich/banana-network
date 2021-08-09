import s from "./Header.module.css"

const Header = () => {
    return (
      <header className={s.header}>
        <img className={s.img}
          src="https://svgsilh.com/svg/2491236-ffc107.svg"
          alt="logo"
        ></img>
      </header>
    );
}

export default Header