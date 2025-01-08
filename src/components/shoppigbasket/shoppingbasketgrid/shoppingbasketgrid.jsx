import React, { useState, useEffect } from "react";
import { Grid } from "swiper/modules";
import Shopping_b_Product from "../product/product";



const ProductGrid = ({ products }) => {


    return (

        <Grid
            container
            direction="row"
            sx={{
                justifyContent: "space-evenly",
                alignItems: "stretch",
                paddingBottom: '70px',
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden'
            }}
        >

            {products.map((product) => (
                <Shopping_b_Product key={product.id} product={product} />
            ))}


        </Grid>

    )

}

export default ProductGrid