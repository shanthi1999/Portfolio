import React from "react";
import HeroInfo from "../HeroText";
import HeroImage from "../HeroImage";
import { Grid } from "@mui/material";

function Home() {
  return (
    <Grid container xs={12} sm={12} md={12} item>
      <Grid xs={12} sm={12} md={12} item display="flex" justifyContent="center">
        <HeroImage />
      </Grid>
      <Grid xs={12} sm={12} md={12} item>
        <HeroInfo />
      </Grid>
    </Grid>
  );
}

export default Home;
