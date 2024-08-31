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
          path: "reset_password",
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
