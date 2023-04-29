import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Events from "./components/pages/Events";
import News from "./components/pages/News";
import ContactUs from "./components/pages/ContactUs";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import RedSails from "./components/pages/RedSails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/events",
        element: <Events />,
    },
    {
        path: "/redSails",
        element: <RedSails/>
    },
    {
        path: "/news",
        element: <News />
    },
    {
        path: "/contactUs",
        element: <ContactUs/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
