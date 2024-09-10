import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <nav className="nav__bar">
      <ol className="nav__item__list">
        <Link to="/beans">Beans</Link>
        <Link to="/facts">Facts</Link>
        <Link to="/recipes">Recipies</Link>
        <Link to="/combinations">Combinations</Link>
        <Link to="/history">History</Link>
      </ol>
    </nav>
  );
};

export default Nav;
