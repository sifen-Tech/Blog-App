import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 text-gray-700 font-medium ">
      <Link to="/">Home</Link>

      <Link to="/create">Create Post</Link>
      <Link to="/Bookmarks">Bookmarks</Link>
    </nav>
  );
}
export default Navbar;
