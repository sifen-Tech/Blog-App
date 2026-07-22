import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold border-b-2 border-blue-600"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">
      <div className="mx-auto flex justify-center gap-10 px-8 py-4 text-lg font-medium">
        <NavLink to="/" end className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/create" className={linkStyle}>
          Create Post
        </NavLink>

        <NavLink to="/bookmarks" className={linkStyle}>
          Bookmarks
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
