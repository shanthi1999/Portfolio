"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Tooltip, IconButton, SvgIconProps } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

interface IconProps {
  icon: React.ComponentType<SvgIconProps>;
}

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "end",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  margin: `${theme.spacing(1)} 0px`,
  color: theme.palette.primary.main,
  "@media(max-width: 600px)": {
    margin: `${theme.spacing(1)} ${theme.spacing(0.1)}`,
  },
}));

const StyledIcon = styled(({ icon: IconComponent, ...props }: IconProps) => (
  <IconComponent {...props} />
))(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "0.7em",
  "@media(max-width: 600px)": {
    fontSize: "0.6em",
  },
}));

const Menu = () => {
  const handleCallMe = () => {
    window.open('tel:+918248540909'); 
  };

  const handleMailMe = () => {
    window.location.href = 'mailto:shanthibabu1999@gmail.com?subject=Contact&body=Hello';
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/shanthi.pdf'; 
    link.download = 'Shanthi_Babu_Resume.pdf';
    link.click();
  };


  return (
    <StyledBox id="top">
      <Tooltip title="Call Me" placement="bottom">
        <StyledIconButton onClick={handleCallMe}>
          <StyledIcon icon={CallIcon} />
        </StyledIconButton>
      </Tooltip>
      <Tooltip title="Mail Me" placement="bottom">
        <StyledIconButton onClick={handleMailMe}>
          <StyledIcon icon={MailOutlineIcon} />
        </StyledIconButton>
      </Tooltip>
      <Tooltip title="Download Resume" placement="bottom">
        <StyledIconButton onClick={handleDownloadResume}>
          <StyledIcon icon={SystemUpdateAltIcon} />
        </StyledIconButton>
      </Tooltip>
    </StyledBox>
  );
};

export default Menu;
