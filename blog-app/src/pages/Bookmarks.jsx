import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";
import BlogCard from "../components/BlogCard";
import mountainBg from "../images/mountain.png";

function Bookmarks() {
  const [bookmarks] = useAtom(bookmarksAtom);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat pt-5"
      style={{ backgroundImage: `url(${mountainBg})` }}
    >
      <div className="min-h-screen bg-black/50 p-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Saved Stories
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-200">
          Your favorite articles and ideas saved for later.
        </p>

        {bookmarks.length === 0 ? (
          <p className="mt-10 text-xl text-white">No bookmarks yet.</p>
        ) : (
          <BlogCard posts={bookmarks} />
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
