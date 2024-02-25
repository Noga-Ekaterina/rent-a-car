import { Navigate } from "react-router-dom";
import Car from "../pages/car/Car";
import Comments from "../pages/Comments";
import Contacts from "../pages/Contacts";
import Home from "../pages/Home";
import RentTerms from "../pages/RentTerms";

export default [
   {path: "/", element: <Home/>},
   {path: "/rent-terms", element: <RentTerms/>},
   {path: "/comments", element: <Comments/>},
   {path: "/contacts", element: <Contacts/>},
   {path: "/car/:id", element: <Car/>},
   {path:'*', element: <Navigate to="/" replace/>},
];