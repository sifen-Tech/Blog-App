import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import BlogDetail from "./pages/BlogDetails.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<BlogDetail />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </>
  );
}

export default App;
