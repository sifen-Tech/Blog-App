import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm() {
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = () => {
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const newBlog = {
      id: Date.now(),
      title: blog.title,
      body: blog.content,
      tags: [],
    };

    const updatedBlogs = [...existingBlogs, newBlog];

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    setBlog({
      title: "",
      content: "",
    });

    navigate("/");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Give your thoughts a name..."
        value={blog.title}
        onChange={(e) =>
          setBlog({
            ...blog,
            title: e.target.value,
          })
        }
      />

      <br />

      <input
        type="text"
        placeholder="Start writing here..."
        value={blog.content}
        onChange={(e) =>
          setBlog({
            ...blog,
            content: e.target.value,
          })
        }
      />

      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BlogForm;
