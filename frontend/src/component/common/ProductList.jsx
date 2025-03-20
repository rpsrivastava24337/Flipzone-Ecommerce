import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Grid, Card, CardContent, CardMedia, Typography, Button, IconButton, Box } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const ProductList = ({ products }) => {
  const { cart, dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const incrementItem = (product) => {
    dispatch({ type: "INCREMENT_ITEM", payload: product });
  };

  const decrementItem = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem && cartItem.quantity > 1) {
      dispatch({ type: "DECREMENT_ITEM", payload: product });
    } else {
      dispatch({ type: "REMOVE_ITEM", payload: product });
    }
  };

  return (
    <Grid container spacing={3}>
      {products.map((product, index) => {
        const cartItem = cart.find((item) => item.id === product.id);
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="200"
                  image={product.imageUrl}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ${product.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </Link>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px' }}>
                {cartItem ? (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => decrementItem(product)} size="small">
                      <Remove />
                    </IconButton>
                    <Typography variant="body1" sx={{ margin: '0 10px' }}>
                      {cartItem.quantity}
                    </Typography>
                    <IconButton onClick={() => incrementItem(product)} size="small">
                      <Add />
                    </IconButton>
                  </Box>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addToCart(product)}
                    sx={{
                      fontSize: { xs: "12px", sm: "14px" },
                      padding: { xs: "5px 10px", sm: "6px 12px" },
                    }}
                  >
                    Add To Cart
                  </Button>
                )}
              </Box>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
