import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MediaCard from "./Card";

function MyComponent({ products }) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "50px",
        paddingX: { xs: 2, sm: 3, md: 4 },
        bgcolor: "#f5f5f5", // Light background color for the entire container
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: { xs: 2, sm: 3, md: 4 },
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            rowGap: { xs: 2, sm: 3, md: 4 },
            columnGap: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {products.length > 0 &&
            products.map((product, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <MediaCard product={product} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default MyComponent;
