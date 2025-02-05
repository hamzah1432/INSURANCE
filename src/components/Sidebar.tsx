import { Box, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Card, CardContent, Avatar, colors, Typography, Alert, Button } from '@mui/material';
import { Home, Settings, Apartment, Info } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import {  useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import FormStepper from './FormStepper';

const drawerWidth = 280;

const drawerItems = [
  { text: 'Home', icon: <Home />, path: '/' },
  { text: 'Insurance', icon: <Apartment />, path: '/insurance' },
  { text: 'Settings', icon: <Settings />, path: '/settings' },
  { text: 'Help', icon: <Info />, path: '/help' },
];

function DrawerItem({ text, icon, path }: { text: string; icon: React.ReactNode; path: string }) {
  const navigate = useNavigate();
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ padding: "8px 0" }} onClick={() => navigate(path)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}

export default function Layout() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List sx={{ padding: "0 16px" }}>
            {drawerItems.map((item) => (
              <DrawerItem key={item.text} text={item.text} icon={item.icon} path={item.path} />
            ))}
            <Button variant="contained" startIcon={<AddIcon />} fullWidth onClick={handleButtonClick}>
              new insurance
            </Button>
          </List>
        </Box>
      </Drawer>
      {showPopup && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1300,
          }}
          onClick={handleClosePopup}
        >
          <FormStepper />
        </Box>
      )}
    </>
  );
}