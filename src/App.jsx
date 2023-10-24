import React, { useState } from "react";
// react router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CartContainer from "./CartContainer";
import HomePage from "./HomePage";
import Login from "./Login";
import Registration from "./Registration";
import Details from "./Details";

// using react routing to access different pages on different components
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartContainer />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
