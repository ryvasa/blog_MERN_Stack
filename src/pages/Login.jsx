import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../redux/authSlice";
const Login = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser(inputs));
  };
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-2/5">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <div className="card-body flex flex-wrap w-full">
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
              <button onClick={Auth} type="submit" className="btn btn-sm">
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
