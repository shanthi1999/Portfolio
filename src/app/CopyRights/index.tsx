import {
    Grid,
    Typography,
    Box,
    FormControl,
    InputLabel,
    Button,
    styled,
    alpha,
  } from "@mui/material";
  import Image from "next/image";
  import React, { useState } from "react";
  import InputBase from "@mui/material/InputBase";
  import TextareaAutosize from "@mui/material/TextareaAutosize";
  
 
  const CopyRights = ()=>{
    return (
      <Grid
        container
        xs={12}
        sm={12}
        md={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={{ xs: "0.1em", sm: "0.5em" }}
        borderTop="1px solid #bfbfbf"
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          flexDirection="column"
        >
          <Typography
            component="div"
            sx={{
              color: "#545454",
              textAlign: "center",
              fontSize: { xs: "0.5em", sm: "0.8em" },
              margin: { xs: "0.3em 0em", sm: "0.8em 0em" },
              padding:{xs: "0.3em 0.3em", sm: "0.8em 0.8em"},
              textTransform: "none",
              fontFamily:
                "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            }}
          >
        
                © 2024 Shanthi Babu. All rights reserved.
            </Typography>
        </Grid>
      </Grid>
    );
  }
  
  export default CopyRights;
  