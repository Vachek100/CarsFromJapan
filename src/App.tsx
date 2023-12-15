import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Store from "@/pages/Store";
import About from "@/pages/About";
import SignUp from "@/pages/SignUp";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
