import { Navigate } from "react-router-dom";
import Car from "../pages/car/Car";
import Comments from "../pages/Comments";
import Contacts from "../pages/Contacts";
import Home from "../pages/home/Home";
import RentTerms from "../pages/rentTerms/RentTerms";

export default [
   {path: "/rent-a-car/", element: <Home/>},
   {path: "/rent-a-car/rent-terms", element: <RentTerms/>},
   {path: "/rent-a-car/comments", element: <Comments/>},
   {path: "/rent-a-car/contacts", element: <Contacts/>},
   {path: "/rent-a-car/car/:id", element: <Car/>},
   {path:'*', element: <Navigate to="/rent-a-car/" replace/>},
];