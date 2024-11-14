import { Link } from "react-router-dom";
import navbar from "../styles/navbar.module.css"

function Navbar() {
  return (
    <>
      <header >
        <nav className={navbar.nav}>
          <Link to="/"><img src="./src/assets/D2FA6g.svg" alt="Yende Mangum logo" className={navbar.icon}/></Link>
          <Link to="/"><span className={navbar.link}>Home</span></Link>
          <Link to="/lessons"><span className={navbar.link}>Lessons</span></Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
