import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-800 flex justify-between px-6 py-3 text-white items-center">
      <h2 className="text-3xl font-bold text-white">Tailwind CSS</h2>
      <ul className="text-xl">
        <li>
          <NavLink to='typo'>Typography</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
