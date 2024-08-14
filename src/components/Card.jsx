import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ product }) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 300, md: 350, lg: 400 }, // Adjust the width as needed
        maxWidth: "100%",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        margin: "auto",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: 200,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "1px solid #ddd",
        }}
        image={product.attributes.image}
        title={product.attributes.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: 600,
            color: "#333",
          }}
        >
          {product.attributes.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontStyle: "italic",
            color: "#666",
          }}
        >
          {product.attributes.category}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "0.875rem",
            color: "#999",
          }}
        >
          {product.attributes.company}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
          }}
        >
          {product.attributes.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "space-between",
          padding: "8px 16px",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 700,
          }}
        >
          ${product.attributes.price}
        </Typography>
        <Button size="small" variant="contained" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
