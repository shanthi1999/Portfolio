"use client";
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, Typography, Button } from '@mui/material';

const AnimatedQuote = () => {
  return (
    
    <Container sx={{ textAlign: 'center', mt: 5, width:"80%", fontFamily:"sans-serif", padding:"10px", border:'1px solid #cdcbcb', borderRadius:"10px"  }}>
      <Typography variant="body1" gutterBottom style={{  fontStyle:"italic", color: '#194C75' }}>
      “Crafting digital solutions with 3.5+ years of MERN stack expertise. A hodophile at heart, solving problems and programming with passion...!”    </Typography>
    </Container>
  );
};

export default AnimatedQuote;
