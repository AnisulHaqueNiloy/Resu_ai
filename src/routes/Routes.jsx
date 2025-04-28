// import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home/Home/Home";
// import Main from "../layout/Main";
// import ContactUs from "../pages/ContactUs/ContactUs";
// import AboutUs from "../pages/AboutUs/AboutUs";
// import SignInPage from "../auth/sign-in/SignInPage";
// import Dashboard from "@/layout/dashboard/Dashboard";
// import EditResume from "@/layout/dashboard/resume/[resumeId]/edit/EditResume";
// import ViewResume from "@/my-resume/[resumeId]/View";

// export const router = createBrowserRouter([
//     {
//         element: <Main></Main>,
//         children: [
//             {
//                 path: '/dashboard',
//                 element: <Dashboard></Dashboard>
//             },
//             {
//                 path:'/dashboard/resume/:resumeId/edit',
//                 element: <EditResume />
//             }
//         ]
//     },
//     {
//         path: '/',
//         element: <Home></Home>
//     },
//     {
//         path:'contact-us',
//         element: <ContactUs></ContactUs>
//     },
//     {
//         path:'aboutUs',
//         element: <AboutUs></AboutUs>
//     },
//     {
//         path: "/auth/sign-in",
//         element: <SignInPage></SignInPage>
//     },
//     {
//         path:'/my-resume/:resumeId/view',
//         element:<ViewResume></ViewResume>
//     }
// ])
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import SignInPage from "../auth/sign-in/SignInPage";
import Dashboard from "@/layout/dashboard/Dashboard";
import EditResume from "@/layout/dashboard/resume/[resumeId]/edit/EditResume";
import ViewResume from "@/my-resume/[resumeId]/View";
import PrivateRoute from "./PrivatRoute";

export const router = createBrowserRouter([
  {
    element: <Main />, // NavBar will show in every route
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/resume/:resumeId/edit",
        element: (
          <PrivateRoute>
            <EditResume />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-resume/:resumeId/view",
        element: (
          <PrivateRoute>
            <ViewResume />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
]);
