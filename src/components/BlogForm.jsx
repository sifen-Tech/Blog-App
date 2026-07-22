import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mountainBg from "../images/mountain.png";

function BlogForm() {
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!blog.title.trim() || !blog.content.trim()) {
      setFormError("Please fill in both the title and content.");
      return;
    }

    setFormError("");

    const newBlog = {
      id: Date.now(),
      title: blog.title,
      body: blog.content,
      tags: [],
    };

    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    localStorage.setItem("blogs", JSON.stringify([...existingBlogs, newBlog]));

    setBlog({
      title: "",
      content: "",
    });

    navigate("/");
  };

  return (
    <div
      className="min-h-screen pt-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${mountainBg})` }}
    >
      <div className="min-h-screen bg-black/50 p-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <h1 className="text-3xl font-bold text-white mb-6">
              Create a New Post
            </h1>

            {formError && (
              <p className="mb-4 text-red-400 font-medium">{formError}</p>
            )}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Give your thoughts a name..."
                value={blog.title}
                onChange={(e) => {
                  setBlog({
                    ...blog,
                    title: e.target.value,
                  });

                  setFormError("");
                }}
                className="
                  w-full
                  bg-white/10
                  text-white
                  placeholder-gray-300
                  border
                  border-white/20
                  rounded-lg
                  p-3
                  mb-5
                  outline-none
                  focus:border-white
                "
              />

              <textarea
                placeholder="Start writing here. Use the whitespace to find your flow..."
                value={blog.content}
                onChange={(e) => {
                  setBlog({
                    ...blog,
                    content: e.target.value,
                  });

                  setFormError("");
                }}
                rows={10}
                className="
                  w-full
                  bg-white/10
                  text-white
                  placeholder-gray-300
                  border
                  border-white/20
                  rounded-lg
                  p-3
                  mb-6
                  outline-none
                  focus:border-white
                "
              />

              <button
                type="submit"
                className="
                  bg-white
                  text-black
                  px-8
                  py-3
                  rounded-lg
                  font-medium
                  hover:bg-gray-200
                  transition
                "
              >
                Publish Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogForm;
