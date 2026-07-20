import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";
import BlogCard from "../components/BlogCard";

function Bookmarks() {
  const [bookmarks] = useAtom(bookmarksAtom);

  return (
    <div>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        bookmarks.map((post) => <BlogCard key={post.id} post={post} />)
      )}
    </div>
  );
}

export default Bookmarks;
