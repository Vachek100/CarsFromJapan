import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Store from "@/pages/Store";
import About from "@/pages/About";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/log-in" element={<Login />} />
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
