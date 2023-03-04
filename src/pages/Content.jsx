import React, { useEffect, useState } from "react";
import Thumbnails from "../components/Thumbnails";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContentLeft from "../components/ContentLeft";
import ContentRight from "../components/ContentRight";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "axios";
const Content = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // getUserId();
    getPostById();
  }, [userId]);

  const getPostById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  //  post.author._id &&setUserId(post.author._id);
  // const getUserId = () => {
  //   if (!post.author) {
  //     return;
  //   } else {
  //     setUserId(post.author._id);
  //   }
  // };
  console.log(post.author);
  console.log(post);
  return (
    <>
      <Navbar />
      <div className="flex pt-20 w-full justify-center">
        <div className="w-11/12 flex  gap-4">
          <ContentLeft post={post} />
          <ContentRight user={post.author} />
        </div>
      </div>
      <Thumbnails />
      <Footer />
    </>
  );
};

export default Content;
