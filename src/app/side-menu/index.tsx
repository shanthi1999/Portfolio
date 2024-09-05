"use client";
import React, { useEffect, useState } from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PagesIcon from "@mui/icons-material/Pages";
import TagIcon from "@mui/icons-material/Tag";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useRouter } from 'next/router';
import NavigationIcon from '@mui/icons-material/Navigation';
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(() => ({
//   sidebar: {
//     border: "1px solid #e5e5e5",
//     height: "100%",
//     position: "fixed",
//     display: "flex",
//     flexDirection: "column",
//   },
// }));

const Sidebar = (onScroll: any) => {
  // const classes = useStyleds();
  const icons = [
    { label: "Open Menu", icon: <MenuIcon fontSize="small" />, name: "menu" },
    { label: "Projects", icon: <FolderOpenIcon fontSize="small" />, name: "projects" },
    { label: "Education", icon: <SchoolIcon fontSize="small" />, name: "education" },
    { label: "Skills", icon: <WorkspacePremiumIcon fontSize="small" />, name: "skills" },
    { label: "Experience", icon: <PagesIcon fontSize="small" />, name: "experience" },
    { label: "Social Media", icon: <TagIcon fontSize="small" />, name: "socialMedia" },
    { label: "Analytics", icon: <AutoGraphIcon fontSize="small" />, name: "analytics" },
    { label: "Contact Me", icon: <ChatBubbleIcon fontSize="small" />, name: "contactMe" },
    { label: "Go to Top", icon: <NavigationIcon fontSize="small" />, name: "top" },

  ];

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleNavigation = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      display={{ xs: "none", sm: "flex" }}
      flexDirection="column"
      sx={{ border: "1px solid #e5e5e5", height: "100%", position: "fixed" }}
    >
      {icons.map((item, index) => (
        <Tooltip key={index} title={item.label} placement="left">
          <IconButton sx={{ margin: "7px 5px" }} onClick={() => handleNavigation(item.name)}>{item.icon}</IconButton>
        </Tooltip>
      ))}
      {/* {open ? (
        <Tooltip title="Light Mode" placement="left">
          <IconButton onClick={handleDrawerToggle} sx={{ margin: "7px 5px" }}>
            <LightModeIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Dark Mode" placement="left">
          <IconButton onClick={handleDrawerToggle} sx={{ margin: "7px 5px" }}>
            <Brightness4Icon fontSize="small" />
          </IconButton>
        </Tooltip>
      )} */}
    </Box>
  );
};

export default Sidebar;
