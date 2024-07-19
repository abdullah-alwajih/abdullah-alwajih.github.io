import Experiences from "@/components/Experiences/Experiences";

export default function Navbar() {
  return (
    <nav className="navbar">

      <ul className="navbar-list">

        <li className="navbar-item">
          <button className="navbar-link  active" data-nav-link>About</button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>Experiences</button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>Skills</button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>Contact</button>
        </li>

      </ul>

    </nav>
  );
}
