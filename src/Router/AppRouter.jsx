import {Route, Routes} from "react-router-dom";
import Login from "../Components/Login.jsx";
import HomePage from "../Components/HomePage.jsx";
import Essai from "../Components/Essai.jsx";


export default function AppRouter()
{
    return(
       <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/login" element={<Login />} />
           <Route path="/essai" element={<Essai/>}/>"
       </Routes>
    )
}