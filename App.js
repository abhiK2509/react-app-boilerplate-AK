import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import ShimmerUI from "./src/components/ShimmerUI/ShimmerUI";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Login from "./src/components/Login";
import ProtectedRoute from "./src/components/ProtectedRoute";
import Accordion from "./src/components/Accordion/Accordion";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/shimmer",
            element: <ShimmerUI />,
          },
        ],
      },
      {
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
