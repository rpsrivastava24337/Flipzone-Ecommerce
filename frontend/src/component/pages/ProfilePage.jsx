import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Alert,
  Pagination as MuiPagination,
} from "@mui/material";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await ApiService.getLoggedInUserInfo();
      setUserInfo(response.user);
    } catch (error) {
      setError(
        error.response?.data?.message || error.message || "Unable to fetch user info"
      );
    }
  };

  if (!userInfo) {
    return (
      <Container>
        <Typography variant="h5" textAlign="center">
          Loading...
        </Typography>
      </Container>
    );
  }

  const handleAddressClick = () => {
    navigate(userInfo.address ? "/edit-address" : "/add-address");
  };

  const orderItemList = userInfo.orderItemList || [];
  const totalPages = Math.ceil(orderItemList.length / itemsPerPage);

  const paginatedOrders = orderItemList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container maxWidth="md" sx={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Welcome, {userInfo.name}
      </Typography>

      {error ? (
        <Alert severity="error" sx={{ marginBottom: "20px" }}>
          {error}
        </Alert>
      ) : (
        <Grid container spacing={2}>
          {/* User Info Section */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">User Information</Typography>
                <Typography><strong>Name: </strong>{userInfo.name}</Typography>
                <Typography><strong>Email: </strong>{userInfo.email}</Typography>
                <Typography><strong>Phone Number: </strong>{userInfo.phoneNumber}</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Address Section */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Address</Typography>
                {userInfo.address ? (
                  <div>
                    <Typography><strong>Street: </strong>{userInfo.address.street}</Typography>
                    <Typography><strong>City: </strong>{userInfo.address.city}</Typography>
                    <Typography><strong>State: </strong>{userInfo.address.state}</Typography>
                    <Typography><strong>Zip Code: </strong>{userInfo.address.zipCode}</Typography>
                    <Typography><strong>Country: </strong>{userInfo.address.country}</Typography>
                  </div>
                ) : (
                  <Typography>No Address information available</Typography>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddressClick}
                  sx={{ marginTop: "10px" }}
                >
                  {userInfo.address ? "Edit Address" : "Add Address"}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Order History Section */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Order History
            </Typography>
            {paginatedOrders.map((order) => (
              <Card key={order.id} sx={{ display: "flex", marginBottom: "15px" }}>
                {order.product?.imageUrl && (
                  <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image={order.product.imageUrl}
                    alt={order.product.name}
                  />
                )}
                <CardContent>
                  <Typography variant="body1">
                    <strong>Name: </strong>{order.product.name}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Status: </strong>{order.status}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Quantity: </strong>{order.quantity}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Price: </strong>${order.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            ))}

            {/* Pagination Component */}
            <MuiPagination
              count={totalPages}
              page={currentPage}
              onChange={(_, page) => setCurrentPage(page)}
              color="primary"
              sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default ProfilePage;
