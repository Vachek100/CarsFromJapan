import { useState, useEffect } from "react";
import { auth } from "@/firebase/firebase";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import StorePage from "@/pages/StorePage";
import AboutPage from "@/pages/AboutPage";
import FavoritesPage from "./pages/FavoritesPage";
import Profile from "./components/Profile";
import { Toaster } from "@/components/ui/sonner";
import ProtectedRoute from "./routeProtection/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import Account from "./components/Account";

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
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />}>
                <Route index element={<Profile />} />
                <Route path="account" element={<Account />} />
              </Route>
              <Route path="favorites" element={<FavoritesPage />} />
            </Route>
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
