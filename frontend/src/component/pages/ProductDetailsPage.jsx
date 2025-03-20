import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ApiService from "../../service/ApiService";
import { styled } from "@mui/system";  // MUI styled for dynamic styles
import { Button } from "@mui/material"; // MUI Button component

// Styled components for responsive design
const ProductDetail = styled("div")(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  [theme.breakpoints.up('sm')]: { // for screens larger than small (600px)
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const ProductImage = styled("img")(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  height: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '400px',
  },
}));

const QuantityControls = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginTop: '10px',
  
}));

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { cart, dispatch } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await ApiService.getProductById(productId);
      setProduct(response.product);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  const addToCart = () => {
    if (product) {
      dispatch({ type: 'ADD_ITEM', payload: product });
    }
  };

  const incrementItem = () => {
    if (product) {
      dispatch({ type: 'INCREMENT_ITEM', payload: product });
    }
  };

  const decrementItem = () => {
    if (product) {
      const cartItem = cart.find(item => item.id === product.id);
      if (cartItem && cartItem.quantity > 1) {
        dispatch({ type: 'DECREMENT_ITEM', payload: product });
      } else {
        dispatch({ type: 'REMOVE_ITEM', payload: product });
      }
    }
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const cartItem = cart.find(item => item.id === product.id);

  return (
    <ProductDetail>
      <ProductImage src={product?.imageUrl} alt={product?.name} />
      <div>
        <h1>{product?.name}</h1>
        <p>{product?.description}</p>
        <span>${product.price.toFixed(2)}</span>
        {cartItem ? (
          <QuantityControls>
            <Button variant="contained" onClick={decrementItem}>-</Button>
            <span>{cartItem.quantity}</span>
            <Button variant="contained" onClick={incrementItem}>+</Button>
          </QuantityControls>
        ) : (
          <Button variant="contained" onClick={addToCart}>Add To Cart</Button>
        )}
      </div>
    </ProductDetail>
  );
};

export default ProductDetailsPage;
