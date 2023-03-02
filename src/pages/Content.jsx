import React from "react";
import Thumbnails from "../components/Thumbnails";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContentLeft from "../components/ContentLeft";
import ContentRight from "../components/ContentRight";
const Content = () => {
  return (
    <>
      <Navbar />
      <div className="flex pt-20 w-full justify-center">
        <div className="w-11/12 flex  gap-4">
          <ContentLeft />
          <ContentRight />
        </div>
      </div>
      <Thumbnails />
      <Footer />
    </>
  );
};

export default Content;
