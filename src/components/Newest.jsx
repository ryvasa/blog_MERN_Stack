import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useParams } from "react-router-dom";

const Newest = () => {
  const [posts, setPosts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    getPosts();
  }, [category]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        category !== undefined
          ? `http://localhost:5000/posts/newest?category=${category}`
          : `http://localhost:5000/posts/newest`
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  dayjs.extend(relativeTime);
  return (
    <div className="flex pt-20 justify-center">
      <div className="w-11/12 flex flex-col  gap-4">
        {posts.map((post) => (
          <div className="relative mb-5 " key={post._id}>
            <h1 className="text-5xl pb-3 font-semibold">{post.title}</h1>
            <div className="flex justify-center ">
              <img
                src={
                  post.img ||
                  "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg"
                }
                alt=""
                className="rounded-lg h-96 w-full object-cover"
              />
            </div>
            <div className="flex justify-between m-5">
              <div className="flex items-center">
                <img
                  src={
                    post.author.img ||
                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                  }
                  alt=""
                  className="w-10 h-10 object-cover mr-4 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    {post.author.username}
                  </span>
                  <span className="text-sm font-normal">
                    Post in : {dayjs(post.createdAt).fromNow()}
                  </span>
                </div>
              </div>
            </div>
            <p className="font-light h-20  overflow-hidden">
              {getText(post.content)}
            </p>
            <div className="absolute bottom-0  w-full h-32  justify-center items-end">
              <div className="  w-full h-32 flex justify-center items-end bg-gradient-to-t from-white  opacity-100"></div>
              <div className="absolute -bottom-5 w-full  pt-2 flex items-end justify-center">
                <Link to={`/posts/${post._id}`}>
                  <button className="btn btn-sm">Read more</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newest;
