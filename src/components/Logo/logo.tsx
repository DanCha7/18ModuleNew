import logo__img from "/src/imagines/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo__img} alt="/" />
      <span>Jelly Belly</span>
    </Link>
  );
};

export default Logo;
