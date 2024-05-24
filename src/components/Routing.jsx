import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
import Contact from "./Contact";
import ProductDetail from "./ProductDetail";

const Routing = ({ product, setProduct, detail, closeDetail, setCloseDetail, viewProduct, cart, setCart, addToCart, filterProduct, categories, loading }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Home
            detail={detail}
            closeDetail={closeDetail}
            setCloseDetail={setCloseDetail}
            viewProduct={viewProduct}
            addToCart={addToCart}
          />
        }
        />
        <Route path="/products" element={
          <Product
            product={product}
            setProduct={setProduct}
            detail={detail}
            closeDetail={closeDetail}
            setCloseDetail={setCloseDetail}
            viewProduct={viewProduct}
            addToCart={addToCart}
            filterProduct={filterProduct}
            categories={categories}
            loading={loading}
          />
        }
        />
        <Route path="/products/detail" element={
          <ProductDetail
            addToCart={addToCart}
          />
        }
        />
        <Route path="/cart" element={
          <Cart
            cart={cart}
            setCart={setCart}
          />
        }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Routing;