"use client";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CONFIG from "../../../config/helper.json";

const COMPANIES = CONFIG.companies.reverse();

const CustomCardMedia = ({
  index,
  image,
  title,
}: {
  index: number,
  image: string;
  title: string;
  }) => (
  <Box
    sx={{
      width: { xs: "50%", sm: "60%", md: "60%", lg: "60%" },
      padding: { xs: "0.5em", lg: "0.5em" },
    }}
  >
    <Image
      key={index}
      src={image}
      alt={`${title}`}
      width={500}
      height={500}
      style={{ borderRadius: "50%" }}
    />
  </Box>
);

function Experience() {

  function calculateDuration(dateRange:any) {
    const [start, end] = dateRange.split(" - ");
  
    function parseDate(dateStr:any) {
      const [monthStr, yearStr] = dateStr.split(", ");
      const month = new Date(Date.parse(monthStr + " 1, 2022")).getMonth();
      const year = parseInt(yearStr, 10);
      return { month, year };
    }
  
    const { month: startMonth, year: startYear } = parseDate(start);
    const { month: endMonth, year: endYear } = parseDate(end.toLowerCase() === 'present' ? `${new Date().getMonth() + 1}, ${new Date().getFullYear()}`: end);
  
    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
  
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
  
    return { years, months };
  }

  return (
    <Grid
      id="experience"
      container
      xs={12}
      sm={12}
      md={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={{ xs: "0.1em", sm: "0.5em" }}
      borderTop="1px solid #bfbfbf"
      flexDirection="column"
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
          Experience
        </Typography>
        <Typography
          variant="body1"
          mb="2em"
          gutterBottom
          sx={{
            fontWeight: 500,
            maxWidth: { xs: "90%", sm: "70%" },
            textAlign: "center",
            lineHeight: "1.7em",
            color: "#194C75",
            fontSize: { xs: "0.7em", sm: "0.75em" },
            textTransform: "none",
            fontFamily:
              "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          }}
        >
          Experienced Full Stack Developer with a diverse project portfolio,
          specializing in scalable solutions using the MERN stack.
        </Typography>

        <Grid item>
          <Grid
            spacing={2}
            container
            xs={12}
            sm={12}
            md={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={{ xs: "0.1em", sm: "0.5em" }}
          >
            {COMPANIES.map((company, index) => (
              <Grid key={index} item xs={6} sm={2} md={2}>
                <Card
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <CustomCardMedia
                    index={index}
                    image={company.image}
                    title={company.name}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        borderTop: "1px solid #bfbfbf",
                        textTransform: "none",
                        fontSize: { xs: "0.7em", sm: "0.7em" },
                        lineHeight: "1.7em",
                        fontWeight: 600,
                        textAlign: "justify",
                        paddingTop: { xs: "0.5em", sm: "0.5em" },
                        fontFamily:
                          "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                      }}
                    >
                      {company.Designation}
                    </Typography>
                    <Typography
                      sx={{
                        textTransform: "none",
                        fontSize: { xs: "0.7em", sm: "0.7em" },
                        lineHeight: "1.7em",
                        fontWeight: 600,
                        textAlign: "justify",
                        paddingTop: { xs: "0.5em", sm: "0.5em" },
                        fontFamily:
                          "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                      }}
                    >
                      {company.name}
                    </Typography>
                    <Typography
                      sx={{
                        textTransform: "none",
                        fontSize: { xs: "0.7em", sm: "0.7em" },
                        lineHeight: "1.7em",
                        fontWeight: 600,
                        textAlign: "justify",
                        paddingTop: { xs: "0.5em", sm: "0.5em" },
                        fontFamily:
                          "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                      }}
                    >
                      {company.Duration}
                    </Typography>
                    <Typography
                      sx={{
                        textTransform: "none",
                        fontSize: { xs: "0.7em", sm: "0.7em" },
                        lineHeight: "1.7em",
                        fontWeight: 600,
                        textAlign: "justify",
                        paddingTop: { xs: "0.5em", sm: "0.5em" },
                        fontFamily:
                          "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                      }}
                    >
                      {`${calculateDuration(company.Duration).years} years, ${calculateDuration(company.Duration).months} months`}
                      </Typography>
                    
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Experience;
