import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header>
    <div className="logo-container">
      <Link to = {"/"}>
        <img src={logo} />
        <span>Reactiva</span>
        {/* despues ponder otra foto u otro nombre em span */}
      </Link>
    </div>
  </header>
  );
};