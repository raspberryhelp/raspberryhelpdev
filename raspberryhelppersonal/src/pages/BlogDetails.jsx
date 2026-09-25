import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogdata";

function BlogDetails() {
    const { blogId } = useParams();

    const blog = blogs.find(
    (blog) => blog.id === Number(blogId)
    );

  if (!blog) {
    return (
      <div>
        <h1>Blog Post Not Found</h1>

        <Link to="/Blog">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-details">

      <h1>{blog.title}</h1>

      <p className="blog-date">
        {blog.date}
      </p>

      <div className="blog-tags">
        {blog.tags.map((tag) => (
          <span key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="blog-content">
        {blog.content}
      </div>

      <Link to="/Blog">
        ← Back to Blog
      </Link>

    </div>
  );
}

export default BlogDetails;