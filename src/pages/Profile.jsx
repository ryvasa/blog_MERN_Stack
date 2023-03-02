import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaUserEdit,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center w-full justify-center pb-20 pt-28 ">
        <div className="border rounded-lg justify-center flex shadow-lg p-10 w-3/4 bg-white">
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="rounded-lg "
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
                <ul className="gap-3 flex flex-col">
                  <li>: Username</li>
                  <li>: Email</li>
                  <li>: Join at</li>
                  <li>: Total article</li>
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
              <Link to={"/profile/edit"} className="btn btn-sm">
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
