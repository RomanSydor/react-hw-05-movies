import { NavLink } from "react-router-dom";
import routes from "../../config/routes";
import Container from "../Container";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Container>
      <nav className={s.navContainer}>
        <NavLink
          to={routes.home}
          className={({ isActive }) => {
            const linkClasses = [s.navLink];
            if (isActive) linkClasses.push(s.navLinkActive);

            return linkClasses.join(" ");
          }}
        >
          {"Home"}
        </NavLink>
        <NavLink
          to={routes.movies}
          className={({ isActive }) => {
            const linkClasses = [s.navLink];
            if (isActive) linkClasses.push(s.navLinkActive);

            return linkClasses.join(" ");
          }}
        >
          {"Movies"}
        </NavLink>
      </nav>
    </Container>
  );
};

export default Navigation;
