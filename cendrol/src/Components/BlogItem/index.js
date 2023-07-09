import "./index.css";

import ReactPopUp from "../ReactPopUp";

const BlogItem = (props) => {
  const { blog } = props;
  const url = `https://api.chucknorris.io/jokes/random?category=${blog}`;
  const Blog = blog.charAt(0).toUpperCase() + blog.slice(1);

  return (
    <div className="item-container shadow-xl">
      <h1 className="blog-name capitalize ">{Blog}</h1>
      <ReactPopUp item1={blog} Blog={Blog} ulr={url} />
    </div>
  );
};

export default BlogItem;
