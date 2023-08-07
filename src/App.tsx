import "./App.css";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const NavBar = lazy(() => import("./Components/NavBar/NavBar"));
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
