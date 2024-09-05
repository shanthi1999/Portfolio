"use client";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const HeroImage = () => {
  return (
    <Box
      sx={{
        width: { xs: "40%", sm: "30%", md: "20%", lg: "15%" },
        borderRadius: "50%",
        overflow: "hidden",
        margin: "1em auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image
        src="/shanthi.jpg"
        alt="Profile Picture"
        priority
        width={500}
        height={500}
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );
};

export default HeroImage;
