import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Store from "@/pages/Store";
import About from "@/pages/About";
import SignUp from "@/pages/SignUp";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
