import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/login/SignIn/SignIn";
import SignUp from "../pages/login/SignUp/SignUp";
import Error from "../pages/Error/Error";
import AllToys from "../pages/AllToys/AllToys";
import AddToys from "../pages/AddToys/AddToys";
import MyToys from "../pages/MyToys/MyToys";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
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
        },
        {
            path: "allToys",
            element: <AllToys></AllToys>
        },
        {
            path: "myToys",
            element: <MyToys></MyToys>
        },
        {
            path: "addToys",
            element: <AddToys></AddToys>
        },
        {
            path: "viewDetails/:id",
            element: <ViewDetails></ViewDetails>,
            loader: ({params}) => fetch(`https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls/${params.id}`)
        },
        {
            path: "update/:id",
            element: <UpdateToy></UpdateToy>,
            loader: ({params}) => fetch(`https://kiddoz-kuddoz-doll-shop-server.vercel.app/dolls/${params.id}`)
        }
      ]
    },
  ]);

  export default router;