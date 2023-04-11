import { Link } from "react-router-dom";
import s from "./GoBackButton.module.css";

const GoBackButton = ({ link }) => {
  return (
    <Link className={s.goBackBtn} to={link}>
      Go back
    </Link>
  );
};

export default GoBackButton;
