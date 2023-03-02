import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const categories = [
  "sport",
  "food",
  "technology",
  "travelling",
  "otomotif",
  "selebrity",
  "gaming",
];

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Navbar />
      <div className="w-full justify-center flex flex-wrap py-20">
        <div className="flex w-4/5 py-3">
          <span className="text-xl font-semibold">Add New Article</span>
        </div>
        <div className="w-full flex justify-center">
          <div className=" w-4/5 flex gap-5">
            <div className="flex-[3]">
              <input
                type="text"
                className="w-full border rounded-lg border-gray-400 p-2 mb-2 shadow-lg"
                placeholder="Title"
              />
              <div className="rounded-lg  h-72 ">
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  className="h-full border-none "
                />
              </div>
            </div>
            <div className="flex-1 w-full p-5 border-gray-400 border rounded-lg shadow-lg">
              <div className="flex flex-col justify-center w-full  rounded-lg">
                <input type="file" id="img" style={{ display: "none" }} />
                <label
                  htmlFor="img"
                  className=" w-full flex flex-col  justify-center"
                >
                  <div className="flex  justify-center w-full">
                    <FaImage className="w-1/2 h-1/2  text-gray-500" />
                  </div>
                  <div className="btn btn-sm flex  gap-2">
                    <FaImage /> <span>Add picture</span>
                  </div>
                </label>
              </div>
              <div className="w-full border-gray-400 border-t mt-3">
                <span className="font-medium text-lg">Category</span>
                <div className="sm:col-span-2  grid grid-cols-2">
                  {categories.map((cat, index) => (
                    <div
                      className="relative mt-2.5 flex items-center"
                      key={index}
                    >
                      <input
                        type="checkbox"
                        // onChange={handleCat}
                        value={cat}
                        multiple
                        name="categories"
                        id="categories"
                        className="checkbox "
                      />
                      <label className="p-1">{cat}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Write;
