"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#194C75",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#red",
    },
    background: {
      default: "#000",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontSize: 16,
  },
  spacing: 8,
});

export default theme;
