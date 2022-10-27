import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllCourses from "../../Pages/AllCourses/AllCourses";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Details from "../../Pages/Details/Details";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/allCourses"),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element:<AllCourses></AllCourses>,

        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/allCourses/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allCourses/${params.id}`),
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
]);
