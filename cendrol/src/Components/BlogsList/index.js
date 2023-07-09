import { Component } from "react";
import BlogItem from "../BlogItem";

import "./index.css";

const blogslist = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

class BlogsList extends Component {
  render() {
    return (
      <div className="blog-list-container">
        {blogslist.map((each) => (
          <BlogItem key={each} blog={each} />
        ))}
      </div>
    );
  }
}

export default BlogsList;
