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
      <div className="w-[1000px] h-[400px] border border-gray-300 rounded-xl p-10 bg-white shadow-sm hover:shadow-md transition">
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
      </div>
      <div className="w-[1000px] h-[400px] border border-gray-300 rounded-xl p-10 bg-white shadow-sm hover:shadow-md transition">
        <input
          type="text"
          placeholder="Start writing here.Use the whitespace to find your flow..... "
          value={blog.content}
          onChange={(e) =>
            setBlog({
              ...blog,
              content: e.target.value,
            })
          }
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BlogForm;
