import { useState, useEffect } from "react";
import { auth } from "@/firebase/firebase";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Store from "@/pages/Store";
import About from "@/pages/About";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import { Toaster } from "@/components/ui/sonner";
import ProtectedRoute from "./routeProtection/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setFirebaseInitialized(true);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      {firebaseInitialized && (
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <Toaster />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/favorites" element={<Favorites />} />
            </Route>
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
