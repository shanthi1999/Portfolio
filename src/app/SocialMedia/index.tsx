import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LaunchIcon from "@mui/icons-material/Launch";
import { styled } from "@mui/system";

const SocialContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "0.5em",
  paddingTop: "1em",
  borderTop: "1px solid #bfbfbf",
});

const SocialTitle = styled(Typography)({
  color: "#194C75",
  fontWeight: 700,
  textAlign: "center",
  margin: "1em 0",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
});

const SocialGrid = styled(Grid)({
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const SocialItem = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SocialLabel = styled(Typography)({
  fontSize: "0.8em",
  fontWeight: 500,
  color: "#194C75",
  marginTop: "0.5em",
  marginRight: "0.5em",
});

function SocialMedia() {
  const socialLinks = [
    { icon: <LinkedInIcon />, color: "#0A66C2", label: "Shanthi B" },
    { icon: <GitHubIcon />, color: "#211F1F", label: "shanthi1999" },
    { icon: <YouTubeIcon />, color: "#FF0000", label: "ProHub" },
    { icon: <WhatsAppIcon />, color: "#25D366", label: "+91 8248540909" },
    { icon: <InstagramIcon />, color: "#C13584", label: "shanthi_mastermind" },
    { icon: <FacebookIcon />, color: "#1877F2", label: "Shanthi MasterMind" },
    {
      icon: <EmailIcon />,
      color: "#D44638",
      label: "shanthibabu1999@gmail.com",
    },
   
  ];

  return (
    <SocialContainer id="socialMedia">
      <SocialTitle variant="h5">Social Media</SocialTitle>
      <SocialGrid container spacing={2} xs={12} sm={12} md={10}>
        {socialLinks.map((link, index) => (
          <SocialItem item xs={6} sm={4} md={4} key={index}>
            <IconButton sx={{fontSize:{xs:"0.2em", sm: "0.8em"}}} style={{ color: link.color }}>{link.icon}</IconButton>
            <SocialLabel sx={{fontSize:{xs:"0.7em", sm: "0.8em"}}} variant="body1">{link.label}</SocialLabel>
          </SocialItem>
        ))}
      </SocialGrid>
    </SocialContainer>
  );
}

export default SocialMedia;
