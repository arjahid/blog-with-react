import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookmark,handleReadingMarkasRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-5xl">Blogs:{blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddBookmark={handleAddBookmark}
          handleReadingMarkasRead={handleReadingMarkasRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func.isRequired,
    handleReadingMarkasRead: PropTypes.func.isRequired
}
export default Blogs;
