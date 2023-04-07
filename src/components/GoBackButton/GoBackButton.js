import { Link } from "react-router-dom";

const GoBackButton = ({ link }) => {
  return <Link to={link}>Go back</Link>;
};

export default GoBackButton;
