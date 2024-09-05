import {
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Button,
  styled,
  alpha,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import InputBase from "@mui/material/InputBase";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { sendEmail } from "../Projects/nodemailer";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  minWidth: "1em",
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: "0.7em",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  padding: "10px 12px",
  borderRadius: 4,
  border: "1px solid #e5e5e5",
  fontSize: 13,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Helvetica Neue, Arial, sans-serif",
  backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
}));

function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await sendEmail(formData);
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (err) {
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <Grid
      id="contactMe"
      container
      justifyContent="center"
      alignItems="center"
      marginTop={{ xs: "0.1em", sm: "0.5em" }}
      borderTop="1px solid #bfbfbf"
    >
      <Grid
        item
        xs={12}
        md={10}
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
          Contact Me
        </Typography>
        <Grid
          xs={10} sm={10} md={10}
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start"
          display="flex"
        >
          <Typography variant="body1"
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
            }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be a part of your vision. Whether you have a question, a collaboration proposal, or just want to say hello, feel free to reach out! Let's build something amazing together. You can contact me through the form below or directly at shanthibabu1999@gmail.com.
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start"
          display="flex"
        >
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <Box mr="0.5em" mb="1.5em">
              <Image
                src="/shanthi_contact.jpg"
                alt="Shanthi"
                width="200"
                height="200"
              />
            </Box>
          </Grid>
          <Grid item xs={10} sm={6} md={6}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                display: "grid",
                gridTemplateColumns: { sm: "1fr 1fr" },
                gap: 2,
              }}
            >
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="firstName">
                  First Name
                </InputLabel>
                <BootstrapInput
                  placeholder="Shanthi"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="lastName">
                  Last Name
                </InputLabel>
                <BootstrapInput
                  placeholder="Babu"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                variant="standard"
                fullWidth
                sx={{ gridColumn: "span 2" }}
              >
                <InputLabel shrink htmlFor="email">
                  Email
                </InputLabel>
                <BootstrapInput
                  placeholder="shanthi@gmail.com"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                variant="standard"
                fullWidth
                sx={{ gridColumn: "span 2" }}
              >
                <InputLabel shrink htmlFor="message">
                  Message
                </InputLabel>
                <br />
                <StyledTextarea
                  id="message"
                  placeholder="Write your message here..."
                  minRows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                variant="standard"
                fullWidth
                sx={{ gridColumn: "span 2" }}
              >
                <Button
                  sx={{ textTransform: "none", padding: "0.2em" }}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactMe;
