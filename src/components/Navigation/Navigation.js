import { NavLink } from "react-router-dom";
import routes from "../../config/routes";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navContainer}>
      <NavLink to={routes.home} className={s.navLink}>
        {"Home"}
      </NavLink>
      <NavLink to={routes.movies} className={s.navLink}>
        {"Movies"}
      </NavLink>
    </nav>
  );
};

export default Navigation;
