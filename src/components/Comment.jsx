import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
const Comment = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [comment, setComment] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    getComments();
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (error) {
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
        setExpire(decoded.exp);
      }

      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  // Add Comment
  const handleClick = async (e) => {
    e.preventDefault;
    try {
      const data = {
        content: comment,
        userId: user._id,
        postId: id,
      };
      const response = await axiosJWT.post(
        `http://localhost:5000/comments`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  // Get Comment
  const getComments = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/comments/${id}`);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  dayjs.extend(relativeTime);
  return (
    <>
      <div className="my-5 px-2 flex flex-col  border rounded-lg shadow-lg py-5 ">
        <h3 className="text-xl font-semibold">Comment</h3>
        <div className="max-h-96 overflow-auto">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="w-full border my-2 shadow-lg rounded-lg p-5 flex flex-col py-5"
            >
              <div className="flex items-center">
                <img
                  src={
                    comment.author.img ||
                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                  }
                  alt=""
                  className="w-10 h-10 object-cover mr-4 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    {comment.author.username}
                  </span>
                  <span className="text-sm font-normal">
                    {dayjs(comment.createdAt).fromNow()}
                  </span>
                </div>
              </div>
              <div className="py-2">{comment.content}</div>
            </div>
          ))}
        </div>
        <div className="w-full flex gap-3 py-5 px-2">
          <input
            type="text"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment here"
            className="input input-bordered w-full "
          />
          <button onClick={handleClick} className="btn">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
};

export default Comment;
