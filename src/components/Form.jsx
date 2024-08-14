import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField, Slider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Form(props) {
  const [age, setAge] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const [company, setCompany] = React.useState("all");
  const [sort, setSort] = React.useState("a-z");
  const [priceValue, setPriceValue] = React.useState(100);

  function handleChange(event, newValue) {
    setPriceValue(newValue);
  }

  function handleSearch() {
    let copiedProducts = JSON.parse(JSON.stringify(props.filter.products));

    if (category !== "all") {
      copiedProducts = copiedProducts.filter(
        (product) => product.attributes.category === category
      );
    }

    if (company !== "all") {
      copiedProducts = copiedProducts.filter(
        (product) => product.attributes.company === company
      );
    }

    props.filter.setFilteredProducts(copiedProducts);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            marginTop: "100px",
            borderRadius: "7px",
            paddingX: { xs: 2, md: 4, lg: 8 },
            paddingY: { xs: 1, md: 3, lg: 6 },
          }}
        >
          <Grid container spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <label htmlFor="product">Search Product</label>
                <TextField
                  id="product"
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  sx={{
                    padding: 0,
                    borderRadius: 8,
                    height: 30,
                    fontSize: "12px",
                    marginTop: "5px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      height: "30px",
                      fontSize: "12px",
                      padding: "0 8px",
                      "& fieldset": {
                        borderRadius: "12px",
                      },
                    },
                  }}
                  InputProps={{
                    sx: {
                      height: "30px",
                      padding: "0 8px",
                      fontSize: "12px",
                    },
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <label>Select Category</label>
                <Select
                  value={category}
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  onChange={(e) => setCategory(e.target.value)}
                  sx={{
                    padding: 0,
                    borderRadius: 8,
                    height: 30,
                    fontSize: "12px",
                    backgroundColor: "white",
                    marginTop: "5px",
                    "& .MuiOutlinedInput-root": {
                      height: "30px",
                      fontSize: "12px",
                      padding: "0 8px",
                      "& fieldset": {
                        borderRadius: "8px",
                      },
                    },
                    "& .MuiSelect-select": {
                      padding: "4px 8px",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 200,
                        "& .MuiMenuItem-root": {
                          fontSize: "12px",
                          padding: "4px 8px",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={"all"}>All</MenuItem>
                  <MenuItem value={"Tables"}>Tables</MenuItem>
                  <MenuItem value={"Chairs"}>Chairs</MenuItem>
                  <MenuItem value={"Kids"}>Kids</MenuItem>
                  <MenuItem value={"Sofas"}>Sofas</MenuItem>
                  <MenuItem value={"Beds"}>Beds</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <label>Select Company</label>
                <Select
                  id="company"
                  value={company}
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  onChange={(e) => setCompany(e.target.value)}
                  sx={{
                    padding: 0,
                    borderRadius: 8,
                    height: 30,
                    fontSize: "12px",
                    backgroundColor: "white",
                    marginTop: "5px",
                    "& .MuiOutlinedInput-root": {
                      height: "30px",
                      fontSize: "12px",
                      padding: "0 8px",
                      "& fieldset": {
                        borderRadius: "8px",
                      },
                    },
                    "& .MuiSelect-select": {
                      padding: "4px 8px",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 200,
                        "& .MuiMenuItem-root": {
                          fontSize: "12px",
                          padding: "4px 8px",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={"all"}>All</MenuItem>
                  <MenuItem value={"Modenza"}>Modenza</MenuItem>
                  <MenuItem value={"Luxora"}>Luxora</MenuItem>
                  <MenuItem value={"Artifex"}>Artifex</MenuItem>
                  <MenuItem value={"Comfora"}>Comfora</MenuItem>
                  <MenuItem value={"Homestead"}>Homestead</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <label>Select By</label>
                <Select
                  id="sort"
                  value={sort}
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  onChange={(e) => setSort(e.target.value)}
                  sx={{
                    padding: 0,
                    borderRadius: 8,
                    height: 30,
                    fontSize: "12px",
                    backgroundColor: "white",
                    marginTop: "5px",
                    "& .MuiOutlinedInput-root": {
                      height: "30px",
                      fontSize: "12px",
                      padding: "0 8px",
                      "& fieldset": {
                        borderRadius: "8px",
                      },
                    },
                    "& .MuiSelect-select": {
                      padding: "4px 8px",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 200,
                        "& .MuiMenuItem-root": {
                          fontSize: "12px",
                          padding: "4px 8px",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={"a-z"}>A-Z</MenuItem>
                  <MenuItem value={"z-a"}>Z-A</MenuItem>
                  <MenuItem value={"high"}>High</MenuItem>
                  <MenuItem value={"low"}>Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <label>Select Price</label>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{priceValue}</span>
                </Box>
                <Slider
                  color="secondary"
                  valueLabelDisplay="auto"
                  onChange={handleChange}
                  min={0}
                  max={1000}
                  step={10}
                  value={priceValue}
                  sx={{
                    "& .MuiSlider-track": {
                      color: "#057aff",
                      height: 15,
                    },
                    "& .MuiSlider-thumb": {
                      color: "white",
                      outline: "3px solid #057aff",
                      width: 12,
                      height: 12,
                    },
                    "& .MuiSlider-rail": {
                      color: "#b9babb",
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label>0</label>
                  <span>Max: 1,000.00</span>
                </Box>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "center",
                  }}
                >
                  <Checkbox color="primary" />
                  <label style={{ margin: 0 }}>Free Shipping</label>
                </Box>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Button
                  onClick={handleSearch}
                  color="primary"
                  size="small"
                  sx={{
                    borderRadius: 2,
                  }}
                  variant="contained"
                >
                  SEARCH
                </Button>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Button
                  size="small"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#c149ad",
                    ":hover": {
                      backgroundColor: "#a206ad",
                    },
                  }}
                  variant="contained"
                >
                  RESET
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
