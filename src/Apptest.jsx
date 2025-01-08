import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from "react-redux";
import './styles/style.css'
import Home from "./pages/Home/Home";

const Apptest = () => {







    return (

        <>

            {/* <Provider> */}

            <Router>



                <Home />



                <Routes>




                </Routes>

            </Router>
            {/* </Provider> */}

        </>
    )
}

export default Apptest