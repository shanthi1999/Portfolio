/* eslint-disable @next/next/no-img-element */
import {
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function Analytics() {
  return (
    <Grid
      id="analytics"
      container
      xs={12}
      sm={10}
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
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography
          sx={{
            color: "#194C75",
            fontWeight: 700,
            textAlign: "center",
            fontSize: { xs: "1.7em", sm: "1.7em" },
            margin: { xs: "0.3em 0em", sm: "0.8em 0em" },
            textTransform: "none",
          }}
        >
          Analytics
        </Typography>
        <Grid
          container
          xs={12}
          sm={10}
          md={10}
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid
            xs={12}
            sm={10}
            md={10}
            container
            spacing={2}
            justifyContent="center"
            alignItems="flex-start"
            display="flex"
          >
            <Typography
              variant="body1"
              mb="3em"
              mt="2em"
              gutterBottom
              sx={{
                fontWeight: 500,
                maxWidth: { xs: "90%", sm: "90%" },
                textAlign: "center",
                lineHeight: "1.7em",
                color: "#194C75",
                fontSize: { xs: "0.7em", sm: "0.75em" },
                textTransform: "none",
                fontFamily:
                  "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              }}
            >
              Displays my coding activity, including contributions, repository
              stats, and language usage, highlighting my involvement in open
              source projects and technical expertise.{" "}
            </Typography>
            <Grid item xs={12} sm={8}>
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=shanthi1999"
                alt="GitHub Streak"
                width={600}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Analytics;
