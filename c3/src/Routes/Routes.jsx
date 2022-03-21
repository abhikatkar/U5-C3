import { Home } from "../Components/Home/Home";
import { Navbar } from "../Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { History } from "../Components/History/History";
import { Mystery } from "../Components/Mystery/Mystery";
import { Mythology } from "../Components/Mythology/Mythology";
import { Technology } from "../Components/Technology/Technology";




export const AllRoutes = ()=>{
    return(
        <>
        <Navbar/>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/mystery" element={<Mystery/>}/>
            <Route path="/mythology" element={<Mythology/>}/>
            <Route path="/technology" element={<Technology/>}/>
        </Routes>

        </>
    )
}