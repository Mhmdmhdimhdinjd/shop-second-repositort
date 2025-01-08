import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Intro from "./components/Inro/introcontainer";
// import { Provider } from "react-redux";
import Footer from "./components/Footer/Footercontaier";
import './styles/style.css'

const Apptest = () =>{







    return(

        <>

        {/* <Provider> */}
        
        <Router>

            <Navbar />

            <Slider/>

            <Intro/>

            <Footer/>

            <Routes>




            </Routes>

        </Router>
        {/* </Provider> */}

        </>
)}

export default Apptest