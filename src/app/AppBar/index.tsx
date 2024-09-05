import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { PhonelinkLockOutlined, ContactMail, Download } from '@mui/icons-material';

export default function AppBarWrapper() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* News */}
          </Typography>
          <Button color="inherit">
            <PhonelinkLockOutlined sx={{ mr: 1 }} />
            Call
          </Button>
          <Button color="inherit">
            <ContactMail sx={{ mr: 1 }} />
            Mail
          </Button>
          <Button color="inherit">
            <Download sx={{ mr: 1 }} />
            Resume
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
