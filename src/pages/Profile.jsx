import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaUserEdit,
  FaYoutube,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { getMe } from "../redux/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    getPostByUserId();
    if (user === null) {
      navigate("/");
    }
  }, [user]);

  const getPostByUserId = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/posts/find/${user._id}/all`
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  dayjs.extend(relativeTime);
  return (
    <>
      <Navbar />
      <div className="flex items-center w-full justify-center pb-20 pt-28 ">
        <div className="border rounded-lg justify-center flex shadow-lg p-10 w-3/4 bg-white">
          <div className="flex-1 flex items-center w-full justify-center">
            <img
              src={
                user && user.img
                  ? user.img
                  : "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="rounded-lg w-4/5"
            />
          </div>
          <div className="flex flex-1 flex-col font-light justify-center items-center">
            <span className="text-lg w-full text-center font-semibold pb-5">
              User profile
            </span>
            <div className="flex flex-1 justify-between w-full">
              <div className="flex-1">
                <ul className="gap-3 flex flex-col">
                  <li>Username</li>
                  <li>Email</li>
                  <li>Join at</li>
                  <li>Total article</li>
                  <li>Social media</li>
                </ul>
              </div>
              <div className="flex-1">
                <ul className="gap-3 flex font-normal flex-col">
                  <li>: {user.username}</li>
                  <li>: {user.email}</li>
                  <li>
                    : {dayjs(user.createdAt).fromNow()} (
                    {dayjs(user.createdAt).format("D MMMM YYYY")})
                  </li>
                  <li>: {posts.length || "0"} posted article</li>
                  <li className="flex items-start">
                    :
                    <div className="flex-col gap-3 flex">
                      <div className="flex">
                        <FaFacebookSquare className="w-5 h-5 mx-1" />
                        <div className="font-light">facebookacount</div>
                      </div>
                      <div className="flex">
                        <FaTwitterSquare className="w-5 h-5 mx-1" />
                        <div className="font-light">twitteracount</div>
                      </div>
                      <div className="flex">
                        <FaInstagramSquare className="w-5 h-5 mx-1" />
                        <div className="font-light">instagramaccount</div>
                      </div>
                      <div className="flex">
                        <FaYoutube className="w-5 h-5 mx-1" />
                        <div className="font-light">yotubeaccount</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justyfy-center py-3">
              <Link to={`/profile/${user._id}/edit`} className="btn btn-sm">
                <FaUserEdit />
                <span>Edit profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
