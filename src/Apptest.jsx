import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Intro from "./components/Inro/introcontainer";
// import { Provider } from "react-redux";


const Apptest = () =>{







    return(

        <>

        {/* <Provider> */}
        
        <Router>

            <Navbar />

            <Slider/>

            <Intro/>

            <Routes>




            </Routes>

        </Router>
        {/* </Provider> */}

        </>
)}

export default Apptest