import React from "react";
import { Link } from "react-router-dom";

const Newest = () => {
  return (
    <div className="flex pt-20 justify-center">
      <div className="w-11/12 flex flex-col  gap-4">
        <div className="relative mb-5">
          <h1 className="text-5xl font-semibold">title</h1>
          <div className="flex justify-center ">
            <img
              src="https://assets.thehansindia.com/h-upload/2021/06/26/1084530-t.webp"
              alt=""
              className="rounded-lg h-96 w-full object-cover"
            />
          </div>
          <div className="flex justify-between m-5">
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
          </div>
          <p className="font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            iure. Ex error optio sed nostrum praesentium quisquam aspernatur
            alias eos reiciendis itaque, dolorem non facilis, animi impedit at
            minima nam quasi vitae ipsum soluta nemo dolor inventore distinctio
            eum. Reprehenderit maxime ducimus et culpa cupiditate quo. Eius unde
            facilis minus quis alias eveniet expedita odio natus quisquam
            reiciendis tempore asperiores maiores esse deleniti ab cumque quo
            voluptates cupiditate, fuga nam ratione dolores dolorum deserunt
            nesciunt.
          </p>
          <div className="absolute bottom-0  w-full h-32  justify-center items-end">
            <div className="  w-full h-32 flex justify-center items-end bg-gradient-to-t from-white  opacity-100"></div>
            <div className="absolute -bottom-5 w-full  pt-2 flex items-end justify-center">
              <Link to={"/contents/:id"}>
                <button className="btn btn-sm">Show all..</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative mb-5">
          <h1 className="text-5xl font-semibold">title</h1>
          <div className="flex justify-center ">
            <img
              src="https://assets.thehansindia.com/h-upload/2021/06/26/1084530-t.webp"
              alt=""
              className="rounded-lg h-96 w-full object-cover"
            />
          </div>
          <div className="flex justify-between m-5">
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
          </div>
          <p className="font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            iure. Ex error optio sed nostrum praesentium quisquam aspernatur
            alias eos reiciendis itaque, dolorem non facilis, animi impedit at
            minima nam quasi vitae ipsum soluta nemo dolor inventore distinctio
            eum. Reprehenderit maxime ducimus et culpa cupiditate quo. Eius unde
            facilis minus quis alias eveniet expedita odio natus quisquam
            reiciendis tempore asperiores maiores esse deleniti ab cumque quo
            voluptates cupiditate, fuga nam ratione dolores dolorum deserunt
            nesciunt.
          </p>
          <div className="absolute bottom-0  w-full h-32  justify-center items-end">
            <div className="  w-full h-32 flex justify-center items-end bg-gradient-to-t from-white  opacity-100"></div>
            <div className="absolute -bottom-5 w-full  pt-2 flex items-end justify-center">
              <Link to={"/contents/:id"}>
                <button className="btn btn-sm">Show all..</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newest;
