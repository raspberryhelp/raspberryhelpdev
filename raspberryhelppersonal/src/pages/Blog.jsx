import { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogdata";

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const postsPerPage = 5;

  // Filter blogs by tag
  const filteredBlogs = blogs.filter((blog) =>
    blog.tags.some((tag) =>
      tag.toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  // Make sure we don't stay on an invalid page after searching
  const page = Math.min(currentPage, Math.max(totalPages, 1));

  const startIndex = (page - 1) * postsPerPage;

  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <div className="blog-page">
      <h1>Blog</h1>

      <input
        type="text"
        placeholder="Search by tag..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="blog-search"
      />

      <div className="blog-list">
        {currentBlogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/Blog/${blog.id}`}
            className="blog-card"
          >
            <h2>{blog.title}</h2>

            <p className="blog-date">
              {blog.date}
            </p>

            <div className="blog-tags">
              {blog.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {currentBlogs.length === 0 && (
        <p>No posts found with that tag.</p>
      )}

      {totalPages > 0 && (
        <div className="blog-pagination">
          <button
            onClick={() => setCurrentPage(page - 1)}
            disabled={page === 1}
          >
            ← Newer
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(page + 1)}
            disabled={page === totalPages}
          >
            Older →
          </button>
        </div>
      )}
    </div>
  );
}

export default Blog;