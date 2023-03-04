import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault;
    register(inputs);
  };
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const register = async (user) => {
    try {
      const response = await axios.post(`http://localhost:5000/login`, user);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-2/5">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <div className="card-body flex flex-wrap w-full">
              <div className="flex justify-center h-5">
                {error && <span className="text-red-500">{error}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex  justify-center pb-2 items-center flex-col">
              <label className="label">
                <Link
                  to={"/regiter"}
                  className="label-text-alt link link-hover"
                >
                  Have an account? Go to register.
                </Link>
              </label>
              <button
                onClick={handleClick}
                type="submit"
                className="btn btn-sm"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
