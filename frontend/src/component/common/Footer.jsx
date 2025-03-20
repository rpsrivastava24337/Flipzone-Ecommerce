import React from "react";
import { Box, Typography, Link, Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 3,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Footer Links */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Link href="/" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/" color="inherit" underline="hover">
                Contact Us
              </Link>
              <Link href="/" color="inherit" underline="hover">
                Terms & Conditions
              </Link>
              <Link href="/" color="inherit" underline="hover">
                Privacy Policy
              </Link>
              <Link href="/" color="inherit" underline="hover">
                FAQs
              </Link>
            </Box>
          </Grid>

          {/* Footer Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="right" color="inherit">
              &copy; {new Date().getFullYear()} BD Online. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
