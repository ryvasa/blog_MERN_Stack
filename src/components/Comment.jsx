import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Comment = () => {
  return (
    <>
      <div className="my-5 px-2 flex flex-col  border rounded-lg shadow-lg py-5 ">
        <h3 className="text-xl font-semibold">Comment</h3>
        <div className="w-full border my-2 shadow-lg rounded-lg p-5 flex flex-col py-5">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="w-10 h-10 object-cover mr-4 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Nama author</span>
              <span className="text-sm font-normal">Post in : 3 day ago</span>
            </div>
          </div>
          <div className="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
            corporis cupiditate. Reiciendis, enim corporis deleniti sed earum
            pariatur voluptates! Doloremque dolores ipsam necessitatibus et ipsa
            tempora porro nisi ullam id.
          </div>
        </div>
        <div className="w-full border my-2 shadow-lg rounded-lg p-5 flex flex-col py-5">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="w-10 h-10 object-cover mr-4 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Nama author</span>
              <span className="text-sm font-normal">Post in : 3 day ago</span>
            </div>
          </div>
          <div className="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
            corporis cupiditate. Reiciendis, enim corporis deleniti sed earum
            pariatur voluptates! Doloremque dolores ipsam necessitatibus et ipsa
            tempora porro nisi ullam id.
          </div>
        </div>
        <div className="w-full flex gap-3 py-5 px-2">
          <input
            type="text"
            placeholder="Comment here"
            className="input input-bordered w-full "
          />
          <button className="btn">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
};

export default Comment;
