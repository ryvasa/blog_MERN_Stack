import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Thumbnails = () => {
  const [posts, setPosts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    getPosts();
  }, [category]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        category !== undefined
          ? `http://localhost:5000/posts/new?category=${category}`
          : `http://localhost:5000/posts/new`
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
  return (
    <div>
      <div className="flex justify-center self-center pt-20">
        <div className="container w-11/12 h-full grid grid-cols-3 gap-4 ">
          {posts.map((post) => (
            <div className=" h-4/5 border shadow-xl rounded-lg" key={post._id}>
              <img
                src={
                  post.img ||
                  "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg"
                }
                alt="Shoes"
                className="w-full object-cover h-1/2 rounded-lg"
              />
              <div className="m-1 h-1/2 relative ">
                <div className="h-full relative">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="font-light h-12 overflow-hidden">
                    {getText(post.content)}
                  </p>
                  <div className=" absolute bottom-14 w-full h-8 left-0 flex justify-center items-end bg-gradient-to-t from-white  opacity-100"></div>
                  <div className="relative flex justify-center">
                    <Link to={`/posts/${post._id}`} className="btn btn-sm">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
