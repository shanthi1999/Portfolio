"use client";
import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
  Box,
  Chip,
  Icon,
} from "@mui/material";
import Image from "next/image";
import CONFIG from "../../../config/helper.json";
import Link from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";

const PROJECTS = CONFIG.projects;

const SignatureChip = styled(Chip)(({ theme }) => ({
  margin: "0.5em",
  fontSize: theme.breakpoints.down("sm") ? "0.7em" : "0.9em",
  height: theme.breakpoints.down("sm") ? "2em" : "2em",
  minWidth: "7em",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
}));

const StyledCardMedia = styled(CardMedia)({
  height: "7em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  "@media (max-width: 768px)": {
    height: "5em",
  },
});

const CustomCardMedia = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => (
  <Box
    sx={{
      width: { xs: "50%", sm: "50%", md: "50%", lg: "50%" },
      padding: { xs: "0.5em", lg: "0.5em" },
    }}
  >
    <Image src={image} alt={title} width={500} height={500} />
  </Box>
);

export const Projects = () => {
  return (
    <Grid
      id="projects"
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
          Projects{" "}
        </Typography>
        <Typography
          variant="body1"
          mb="2em"
          gutterBottom
          sx={{
            fontWeight: 500,
            maxWidth: { xs: "90%", sm: "80%" },
            textAlign: "center",
            lineHeight: "1.7em",
            textTransform: "none",
            color: "#194C75",
            fontSize: { xs: "0.7em", sm: "0.75em" },
            fontFamily:
              "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          }}
        >
         A robust, user-centric application designed to deliver efficient solutions by leveraging modern web technologies and best development practices.
        </Typography>
        <Grid
          container
          spacing={2}
          xs={12}
          sm={12}
          md={12}
          display="flex"
          justifyContent="center"
        >
          {PROJECTS.map((project, index) => (
            <Grid key={index} item xs={12} sm={6} md={6}>
              <Card
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CustomCardMedia
                  key={index}
                  image={project.image}
                  title={project.name}
                />
                <CardContent>
                  <Typography
                    display="flex"
                    justifyContent="center"
                    sx={{
                      fontFamily:
                        "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                    }}
                  ></Typography>
                  <Typography
                    sx={{
                      borderTop: "1px solid #bfbfbf",
                      textTransform: "none",
                      fontSize: { xs: "0.7em", sm: "0.7em" },
                      lineHeight: "1.7em",
                      textAlign: "justify",
                      paddingTop: { xs: "1em", sm: "1em" },
                      fontFamily:
                        "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7em", sm: "0.7em" },
                      fontWeight: 600,
                      margin: { xs: "1em 0em", sm: "1em 0em" },
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      fontFamily:
                        "-apple-system,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                      color: "text.secondary",
                    }}
                  >
                    Project Link:&nbsp;{" "}
                    <Link href={project.link}>
                      <span style={{ color: "#194C75" }}>
                        {project.name} <LaunchIcon sx={{ fontSize: "1em" }} />
                      </span>{" "}
                    </Link>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8em", sm: "0.8em" },
                      fontWeight: 600,
                      margin: { xs: "1em 0em", sm: "0.7em 0em" },
                    }}
                    color="text.secondary"
                  >
                    Techs:
                  </Typography>
                  <Box display="flex" justifyContent="center" gap={2}>
                    {/* <Box textAlign="center">
                        <Image
                          src="/skills/NodeJS.png"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </Box>
                      <Box textAlign="center">
                        <Image
                          src="/skills/React.png"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </Box>
                      <Box textAlign="center">
                        <Image
                          src="/skills/Express.png"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </Box>
                      <Box textAlign="center">
                        <Image
                          src="/skills/MongoDB.png"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </Box>
                      <Box textAlign="center">
                        <Image
                          src="/skills/Redux.png"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </Box>
                      <Box textAlign="center">
                        <Image
                          src="/skills/NextJS.png"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </Box>
                      <Box textAlign="center">
                        <Image
                          src="/skills/Typescript.png"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </Box>
                      <Box textAlign="center">
                        <Image
                          src="/skills/Javascript.png"
                          alt=""
                          width="40"
                          height="40"
                        />
                      </Box> */}
                    {project.skills.map((skills, index) => (
                      <Box key={index} textAlign="center">
                        <Image src={skills} alt="" width="40" height="40" />
                      </Box>
                    ))}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8em", sm: "0.8em" },
                      fontWeight: 600,
                      margin: { xs: "1em 0em", sm: "0.7em 0em" },
                    }}
                    color="text.secondary"
                  >
                    Tools :
                  </Typography>
                  {/* <SignatureChip
                    variant="outlined"
                    color="primary"
                    label="Figma"
                  />
                  <SignatureChip
                    variant="outlined"
                    color="primary"
                    label="WireFrames"
                  />
                  <SignatureChip
                    variant="outlined"
                    color="primary"
                    label="GitHub"
                  /> */}{" "}
                  {project.tools.map((tool, index) => (
                    <SignatureChip
                      key={index}
                      variant="outlined"
                      color="primary"
                      label={tool}
                    />
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
