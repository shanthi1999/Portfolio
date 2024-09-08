import { styled } from "@mui/material/styles";
import { Typography, Chip, Box } from "@mui/material";
import React from "react";
import Image from "next/image";

const primaryColor = "#194C75";
const secondaryColor = "#B55C0E";

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: primaryColor,
  textTransform: "none",
  fontWeight: 700,
  marginBottom: "0.9em",
  fontSize: theme.breakpoints.down("sm") ? "1.7em" : "1em",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  "@media(max-width: 768px)": {
    color: primaryColor,
    fontSize: "1.4em",
  },
}));

const SubtitleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: secondaryColor,
  marginBottom: "1.5em",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: primaryColor,
  textAlign: "center",
  lineHeight: "1.7em",
  textTransform: "none",
  fontSize: theme.breakpoints.down("sm") ? "0.8em" : "0.9em",
  marginBottom: "2em",
  maxWidth: "70%",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  "@media (max-width: 768px)": {
    maxWidth: "85%",
    fontSize: "0.7em",
  },
}));

const SignatureTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: primaryColor,
  marginBottom: "1em",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
}));

const SignatureChip = styled(Chip)(({ theme }) => ({
  margin: "0.5em",
  fontSize: theme.breakpoints.down("sm") ? "0.7em" : "0.9em",
  height: theme.breakpoints.down("sm") ? "2.5em" : "2.2em",
  width: "12em",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
}));

const SkillsChip = styled(Chip)(({ theme }) => ({
  fontSize: theme.breakpoints.down("sm") ? "0.6em" : "0.9em",
  height: theme.breakpoints.down("sm") ? "2.5em" : "2.2em",
  border: "none",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
}));

const HeroBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}));

const HeroInfo = () => (
  <HeroBox>
    <StyledTypography gutterBottom component="div">
      Hi there, I&rsquo;m Shanthi Babu
    </StyledTypography>
    <SubtitleTypography variant="body1" gutterBottom component="div">
      <SignatureChip
        variant="filled"
        color="secondary"
        label="MERN Stack Dev"
      />
      <SignatureChip variant="filled" color="secondary" label="Freelancer" />
      <SignatureChip variant="filled" color="secondary" label="Team Leader" />
      <SignatureChip
        variant="filled"
        color="secondary"
        label="Software Engineer"
      />
    </SubtitleTypography>
    <DescriptionTypography variant="body1" gutterBottom component="div">
      I am a MERN stack developer with 4+ years of experience in front-end, server-side, and database development. I&rsquo;m a quick learner and a team player who is
      always looking to improve my skills and learn new technologies.
    </DescriptionTypography>
    <SignatureTypography variant="body1" gutterBottom component="div">
      My Signature skills:
    </SignatureTypography>
    <Box display="flex" justifyContent="center" gap={2}>
      <Box textAlign="center">
        <Image src="/skills/NodeJS.png" alt="NodeJS" width="40" height="40" />
      </Box>
      <Box textAlign="center">
        <Image src="/skills/React.png" alt="React" width="40" height="40" />
      </Box>
      <Box textAlign="center">
        <Image src="/skills/Express.png" alt="Express" width="40" height="40" />
      </Box>
      <Box textAlign="center">
        <Image src="/skills/MongoDB.png" alt="MongoDB" width="40" height="40" />
      </Box>
    </Box>
  </HeroBox>
);

export default HeroInfo;
