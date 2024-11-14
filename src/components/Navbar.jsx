import { Link } from "react-router-dom";
import navbar from "../styles/navbar.module.css";
import logo from "../../public/D2FA6g.svg"

function Navbar() {
  return (
    <>
      <header>
        <nav className={navbar.nav}>
          <Link to="/">
            <img
              src={logo}
              alt="Yende Mangum logo"
              className={navbar.icon}
            />
          </Link>
          <Link to="/" className={navbar.link}>Home</Link>{" "}
          <Link to="/lessons" className={navbar.link}>Lessons</Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
