import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
function Education() {
  return (
    <Grid
      id="education"
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
        md={12}
        sm={12}
        borderRadius="3%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Box textAlign="center">
          <Image src="/graduationcap.png" alt="" width="100" height="100" />
        </Box>
        <Typography
          component="div"
          sx={{
            color: "#194C75",
            fontWeight: 700,
            textAlign: "center",
            fontSize: { xs: "1.7em", sm: "1.7em" },
            margin: { xs: "0.3em 0em", sm: "0.8em 0em" },
            textTransform: "none",
            fontFamily:
              "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          }}
        >
          Education
        </Typography>
        <Typography
          variant="body1"
          mb="1em"
          gutterBottom
          sx={{
            fontWeight: 500,
            textAlign: "center",
            lineHeight: "1.7em",
            color: "#194C75",
            maxWidth:"70%",
            fontSize: { xs: "0.7em", sm: "0.75em" },
            fontFamily:
              "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          }}
        >
          Dhirajlal Gandhi College of Technology, Salem, Tamil Nadu, India |
          Anna university
        </Typography>
        <Typography
          variant="body1"
          mb="1em"
          gutterBottom
          sx={{
            fontWeight: 500,
            // maxWidth: { xs: "90%", sm: "70%" },
            textAlign: "center",
            lineHeight: "1.7em",
            color: "#194C75",
            maxWidth:"90%",
            fontSize: { xs: "0.7em", sm: "0.75em" },
            fontFamily:
              "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          }}
        >
          Degree of Bachelor of Engineering in Electronics and Communication
          Engineering | 2017 - 2021
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Education;
