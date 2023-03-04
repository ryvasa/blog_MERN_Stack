import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "axios";
const ContentRight = ({ user }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostByUserId();
  }, [user]);
  const getPostByUserId = async () => {
    if (!user) return;
    try {
      const response = await axios.get(
        user
          ? `http://localhost:5000/posts/find/${user._id}`
          : `http://localhost:5000/posts`
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
    <>
      <div className="flex-1 lg:inline-block hidden border-x rounded-lg shadow-lg ">
        {user ? (
          <>
            <div className=" m-4 mt-5 shadow-lg border rounded-lg">
              <div className="flex-col flex justify-center">
                <h3 className="text-xl text-center pt-1 font-bold">Author</h3>
                <div className="flex items-center justify-center w-full gap-2 py-4">
                  <img
                    src={
                      user.img ||
                      "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                    }
                    alt=""
                    className="w-16 h-16  object-cover rounded-lg"
                  />
                  <div className="flex-col flex justify-center items-center">
                    <span className="text-lg font-semibold">
                      {user.username}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex py-1 justify-center">
                <span className="pl-2">
                  Join at : {dayjs(user.createdAt).fromNow()}
                </span>
              </div>
            </div>
            <div className="flex  w-full flex-col items-center justify-center">
              <div className="text-lg p-2 border-t font-semibold">
                Another article from {user.username}
              </div>
              {posts.map((post) => (
                <div
                  className=" my-2 w-11/12  shadow-xl rounded-lg"
                  key={post._id}
                >
                  <img
                    src={
                      post.img ||
                      "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg"
                    }
                    alt="Shoes"
                    className="rounded-lg "
                  />
                  <div className="m-1">
                    <div className="relative">
                      <h2 className="text-md font-semibold">{post.title}</h2>
                      <p className="font-light text-md h-20 overflow-hidden">
                        {getText(post.content)}
                      </p>
                      <div className="absolute bottom-0 w-full h-8 left-0 flex justify-center items-end bg-gradient-to-t from-white  opacity-100"></div>
                    </div>

                    <div className=" flex mr-2 mb-2 justify-end">
                      <button className="btn btn-xs">Show</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <span> Loading</span>
        )}
      </div>
    </>
  );
};

export default ContentRight;
