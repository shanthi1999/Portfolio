import React from "react";
import Menu from "../Menu";
import Home from "../Home";
import { Grid } from "@mui/material";

function Hero() {
  return (
    <Grid container>
      <Grid
        xs={12}
        sm={12}
        md={12}
        item
        display="flex"
        justifyContent="flex-end"
        alignItems="end"
      >
        <Menu />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Home />
      </Grid>
    </Grid>
  );
}

export default Hero;
