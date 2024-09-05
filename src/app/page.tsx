"use client";
import "./globals.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Sidebar from "./side-menu";
import Hero from "./Hero";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import Education from "./Education";
import SocialMedia from "./SocialMedia";
import ContactMe from "./ContactMe";
import CopyRights from "./CopyRights";
import Analytics from "./Analytics";
import Experience from "./Experience";
import React, { MutableRefObject, Ref, useRef } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function Home() {
  const experienceRef = useRef(null);

  const scrollToSection = (scrollRef: string) => {
    switch (scrollRef as string) {
      case 'experience':
        (experienceRef.current)?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    };
  }

  return (
    <Grid container xs={12} md={12} sm={12}>
      <Grid item xs={0} md={0.7} sm={0.7}>
        <Item>
          <Sidebar onScroll={scrollToSection} />
        </Item>
      </Grid>
      <Grid item>
        <Hero />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        display="flex"
        justifyContent="center"
        mt={{ xs: "1em", sm: "2em" }}
      >
        <Skills />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        display="flex"
        justifyContent="center"
        mt={{ xs: "1em", sm: "2em" }}
        ref={experienceRef}
      >
        <Experience />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        display="flex"
        justifyContent="center"
        mt={{ xs: "1em", sm: "2em" }}
      >
        <Projects />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        display="flex"
        justifyContent="center"
        mt={{ xs: "1em", sm: "2em" }}
      >
        <Education />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        display="flex"
        justifyContent="center"
        mt={{ xs: "1em", sm: "2em" }}
      >
        <SocialMedia />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        display="flex"
        justifyContent="center"
        mt={{ xs: "1em", sm: "2em" }}
      >
        <ContactMe />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        display="flex"
        justifyContent="center"
        mt={{ xs: "1em", sm: "2em" }}
      >
        <Analytics />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        display="flex"
        justifyContent="center"
        mt={{ xs: "1em", sm: "2em" }}
      >
        <CopyRights />
      </Grid>
    </Grid>
  );
}
