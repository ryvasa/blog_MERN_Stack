import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./pages/Content";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Write from "./pages/Write";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/contents/:id" element={<Content />} />
        <Route path="/write" element={<Write />} />
        <Route path="/write/:id" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
