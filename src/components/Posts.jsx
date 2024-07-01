import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://codebuddy.review/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="p-4 bg-white rounded-lg shadow">
          <img
            src={post.image}
            alt="Post"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">
              {post.firstName} {post.lastName}
            </h3>
            <p className="text-gray-700">{post.writeup}</p>
            <img
              src={post.avatar}
              alt="Author"
              className="w-10 h-10 rounded-full mt-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
