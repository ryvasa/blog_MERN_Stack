import Thumbnails from "../components/Thumbnails";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newest from "../components/Newest";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "../redux/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Newest />
      <Thumbnails />
      <Footer />
    </>
  );
};

export default Home;
