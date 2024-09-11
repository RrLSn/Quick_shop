import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Forget_pass from "./Pages/Forget_pass";
import Reset_pass from "./Pages/Reset_pass";
import Sign_up from "./Pages/Sign_up";
import Product_details from "./Pages/Product_details";
import Contact_page from "./Pages/Contact_page";
import Term_condition from "./Pages/Term_condition";
import Privacy from "./Pages/Privacy";
import About_us from "./Pages/About_us";
import Checkout_success from "./Pages/Checkout_success";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Sucess from "./Pages/Sucess";
import Dashboard_page from "./Pages/Dashboard_page";
import Profile_page from "./Pages/Profile_page";
import Settings from "./Pages/Settings";
import Orders_page from "./Pages/Orders_page";
import Order_history from "./Pages/Order_history";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "product_details",
          element: <Product_details />,
        },
        {
          path: "contact_us",
          element: <Contact_page />,
        },
        {
          path: "terms",
          element: <Term_condition />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "about_us",
          element: <About_us />,
        },
        {
          path: "checkout_sucess",
          element: <Checkout_success />,
        },
        {
          path: "dashboard",
          element: <Dashboard_page />,
        },
        {
          path: "dashboard/profile",
          element: <Profile_page />,
        },
        {
          path: "dashboard/settings",
          element: <Settings />,
        },
        {
          path: "dashboard/orders_page",
          element: <Orders_page />,
        },
        {
          path: "dashboard/order_history",
          element: <Order_history />,
        },
      ],
    },
    {
      path: "/auth",
      element: <NoNavBarOutlet />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "forgetPassword",
          element: <Forget_pass />,
        },
        {
          path: "resetPassword",
          element: <Reset_pass />,
        },
        {
          path: "sign_up",
          element: <Sign_up />,
        },
        {
          path: "sucess",
          element: <Sucess />,
        },
      ],
    },
  ]);
  return (
    <div className="wholeWrapper">
      <RouterProvider router={routes} />
    </div>
  );
}

function NoNavBarOutlet() {
  return <Outlet />;
}

export default App;
