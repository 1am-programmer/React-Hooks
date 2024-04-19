import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./router/Root.jsx";
import Usestate from "./Hooks/Usestate.jsx";
import Useeffect from "./Hooks/Useeffect.jsx";
import UseRef from "./Hooks/UseRef.jsx";
import UseContext from "./Hooks/UseContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/useState",
    element: <Usestate />,
  },
  {
    path: "/useEffect",
    element: <Useeffect />,
  },
  {
    path: "/useRef",
    element: <UseRef />,
  },
  {
    path: "/useContext",
    element: <UseContext />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
