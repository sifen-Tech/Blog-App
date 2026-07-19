import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";

function Bookmarks() {
  const [bookmarks] = useAtom(bookmarksAtom);

  return (
    <div>
      <h1>Saved Blogs</h1>

      {bookmarks.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Bookmarks;
