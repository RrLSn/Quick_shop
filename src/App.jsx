import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Forget_pass from "./Pages/Forget_pass";
import Reset_pass from "./Pages/Reset_pass";
import Sign_up from "./Pages/Sign_up";
import Product_details from "./Pages/Product_details";
import Contact_page from "./Pages/Contact_page";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgetPassword",
      element: <Forget_pass />,
    },
    {
      path: "/forgetPassword/reset_password",
      element: <Reset_pass />,
    },
    {
      path: "/sign_up",
      element: <Sign_up />,
    },
    {
      path: "/product_details",
      element: <Product_details />,
    },
    {
      path: "/contact_us",
      element: <Contact_page />,
    },
  ]);
  return (
    <div className="wholeWrapper">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
