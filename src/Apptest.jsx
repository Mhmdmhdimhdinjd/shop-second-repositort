import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import './styles/style.css'
import Home from "./pages/Home/Home";
import store from "./redux/store";
import PrivateRoute from "./navigation/PrivateRoute";
import Products from "./pages/Products/products";
import Shoppingbasket from "./pages/Shoppingbasket/ShoppingBasket";
import Profile from "./pages/Profile/profile";
import ProductDetails from "./pages/productdetail/ProductDetails";


const Apptest = () => {







    return (

        <>

            <Provider store={store}>

                <Router>

                    <Routes>

                        <Route path='/shop-second-repositort/' element={<Home />} />

                        <Route path='/shop-second-repositort/Home' element={<Home />} />

                        <Route path="/shop-second-repositort/profile" element={<Profile/>}  />

                        <Route path="/shop-second-repositort/products" element={<PrivateRoute><Products/></PrivateRoute>}/>

                        <Route path="/shop-second-repositort/Shoppingbasket" element={<PrivateRoute><Shoppingbasket/></PrivateRoute>} />

                        <Route path="/shop-second-repositort/product/:id" element={<ProductDetails />} />

                    </Routes>

                </Router>
            </Provider>

        </>
    )
}

export default Apptest