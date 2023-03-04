import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Comment from "./Comment";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSelector } from "react-redux";
import axios from "axios";
import jwt_decode from "jwt-decode";

const ContentLeft = ({ post }) => {
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [id, setId] = useState("");
  useEffect(() => {
    if (user === null) {
      return;
    } else {
      refreshToken();
    }
  }, []);

  dayjs.extend(relativeTime);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setId(decoded._id);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
      console.log(error);
    }
  };
  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setId(decoded._id);
        setExpire(decoded.exp);
      }

      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  const handleDelete = async () => {
    try {
      const response = await axiosJWT.delete(
        `http://localhost:5000/posts/${post._id}`,

        {
          data: { userId: user._id },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <>
      <div className="flex-[3]">
        {post && post.img && post.author && (
          <>
            <h1 className="text-5xl pb-1 font-semibold">{post.title}</h1>
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
                    post && post.author.img
                      ? post.author.img
                      : "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                  }
                  alt=""
                  className="w-10 h-10 object-cover mr-4 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    {post && post.author ? post.author.username : " "}
                  </span>
                  <span className="text-sm font-normal">
                    Post in : {dayjs(post.createdAt).fromNow()}
                  </span>
                </div>
              </div>

              {user && user._id === post.author._id ? (
                <div className="flex gap-3">
                  <div className="tooltip" data-tip="Edit">
                    <Link
                      to={{
                        pathname: `/write/${post._id}`,
                        state: { post },
                      }}
                      className="btn btn-sm btn-circle flex items-center justify-center"
                    >
                      <FaEdit />
                    </Link>
                  </div>
                  <div className="tooltip" data-tip="Delete">
                    <button
                      onClick={handleDelete}
                      className="btn btn-sm bg-red-500 border-red-500 hover:border-red-500  order hover:bg-red-400 btn-circle text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ) : (
                <span></span>
              )}
            </div>
            <p className="font-light">{getText(post.content)}</p>
            <Comment />
          </>
        )}
      </div>
    </>
  );
};

export default ContentLeft;
