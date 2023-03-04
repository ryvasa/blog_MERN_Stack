import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFileImage } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import axios from "axios";
const EditProfile = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState(null);
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    refreshToken();
    if (user === null) {
      navigate("/");
    }
  }, []);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
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
        setUserId(decoded.id);
        setExpire(decoded.exp);
      }

      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  const handleClick = async (e) => {
    e.preventDefault();
    if (file === null) {
      const user = { ...inputs };
      try {
        const response = await axiosJWT.put(
          `http://localhost:5000/users/${id}`,
          user,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        navigate(`/profile/${id}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        async () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const user = { ...inputs, img: downloadURL };
          try {
            const response = await axiosJWT.put(
              `http://localhost:5000/users/${id}`,
              user,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            navigate(`/profile/${id}`);
          } catch (error) {
            console.log(error);
          }
        }
      );
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center w-full justify-center pb-20 pt-28  ">
        <div className="  border rounded-lg shadow-lg p-10 w-3/4   ">
          <div className="flex  mx-10 justify-center">
            <div className="flex-1 flex-wrap mx-3">
              <div className="flex justify-center">
                {preview ? (
                  <img
                    src={preview}
                    alt="preview image"
                    className="object-cover border shadow-lg rounded-full w-72 h-72 mt-20 mx-3"
                  />
                ) : (
                  <img
                    src={
                      user && user.img
                        ? user.img
                        : "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                    }
                    alt=""
                    className="object-cover border shadow-lg rounded-full w-72 h-72 mt-20 mx-3"
                  />
                )}
              </div>
              <div className="flex py-3 max-w-full justify-center">
                <label htmlFor="file" className=" btn btn-sm shadow-md ">
                  <FaFileImage /> Avatar
                </label>
                <input
                  placeholder={user.img}
                  id="file"
                  name="file"
                  onChange={loadImage}
                  type="file"
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className="isolate flex-1 bg-white ">
              <form className="mx-auto  max-w-xl ">
                <div className=" gap-y-6 gap-x-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Username
                    </label>
                    <div className="mt-2.5">
                      <input
                        onChange={handleChange}
                        placeholder={user.username}
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-md leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        onChange={handleChange}
                        placeholder={user.email}
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-md leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="currentPassword"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Curret Password
                    </label>
                    <div className="relative mt-2.5">
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <label htmlFor="currentPassword" className="sr-only">
                          currentPassword
                        </label>
                      </div>
                      <input
                        onChange={handleChange}
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-md leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="newPassword"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      New Password
                    </label>
                    <div className="relative mt-2.5">
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <label htmlFor="newPassword" className="sr-only">
                          newPassword
                        </label>
                      </div>
                      <input
                        onChange={handleChange}
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-md leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Confirm New Password
                    </label>
                    <div className="relative mt-2.5">
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <label htmlFor="confirmPassword" className="sr-only">
                          confirmPassword
                        </label>
                      </div>
                      <input
                        onChange={handleChange}
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-md leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    onClick={handleClick}
                    type="submit"
                    className="btn btn-sm"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 w-full bg-gradient-to-t from-base-200"></div>
      <Footer />
    </>
  );
};

export default EditProfile;
