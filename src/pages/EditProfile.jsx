import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFileImage } from "react-icons/fa";
const EditProfile = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center w-full justify-center pb-20 pt-28  ">
        <div className="  border rounded-lg shadow-lg p-10 w-3/4   ">
          <div className="flex  mx-10 justify-center">
            <div className="flex-1 flex-wrap mx-3">
              <div className="flex justify-center">
                <img
                  src={
                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                  }
                  alt=""
                  className="object-cover border shadow-lg rounded-full w-72 h-72 mt-20 mx-3"
                />
              </div>
              <div className="flex py-3 max-w-full justify-center">
                <label htmlFor="file" className=" btn btn-sm shadow-md ">
                  <FaFileImage /> Avatar
                </label>
                <input
                  id="file"
                  name="file"
                  //   onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  style={{ display: "none" }}
                />
              </div>

              <div className="flex justify-center py-5">
                <span>ID : userid</span>
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
                        placeholder="username"
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
                        placeholder="youremail"
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
                  <button className="btn btn-sm">Update</button>
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
