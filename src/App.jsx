import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Forget_pass from "./Pages/Forget_pass";
import Reset_pass from "./Pages/Reset_pass";

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
  ]);
  return (
    <div className="wholeWrapper">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
