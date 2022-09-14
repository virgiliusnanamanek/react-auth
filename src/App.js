import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import UpcommingMovie from "./data/UpcommingMovie";
import NowPlayingMovie from "./data/NowPlayingMovie";
import DetailMovie from "./data/DetailMovie";



function App() {

  const [token, setToken] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const parsedToken = JSON.parse(token);
    if (parsedToken) {
      setToken(parsedToken);
    }
  }, [])

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
  }, [token])


  if (!token) {
    return (

      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <Login setToken={setToken} />
      </div>

    )
  }
  return (
    <div className="font-Rubik">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="now-playing" element={<NowPlayingMovie />} />
        <Route path="now-playing/:id" element={<DetailMovie />} />
        <Route path="upcoming" element={<UpcommingMovie />} />
        <Route path="upcoming/:id" element={<DetailMovie />} />
      </Routes>
    </div>
  );
}

export default App;

