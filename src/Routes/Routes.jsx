import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/login/SignIn/SignIn";
import SignUp from "../pages/login/SignUp/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"login",
            element: <SignIn></SignIn>
        },
        {
            path: "signUp",
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;