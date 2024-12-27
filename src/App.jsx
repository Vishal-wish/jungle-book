import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Absorption from "./Components/Absorption";
import Navigation from "./Components/Navigation";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navigation />
          <Home />
          <Footer/>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navigation />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/absorption",
      element: (
        <>
          <Navigation />
          <Absorption />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
