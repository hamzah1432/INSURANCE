import { AppBar, Box, Toolbar, IconButton, Badge, Avatar, Typography, Button, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Notifications as NotificationsIcon, Menu as MenuIcon } from '@mui/icons-material';
import InputSearch from './InputSearch';
import ProfileAvatar from './ProfileAvatar';
import { useState, MouseEvent, KeyboardEvent } from 'react';
import RightBar from './RightBar';

export default function Header() {
  const isTablet = useMediaQuery('(max-width: 768px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
    if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#fff',
          color: '#000',
          boxShadow: 'none',
          border: '1px solid #E0E0E0',
        }}
      >
        <Toolbar>
          {isTablet && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <img src="/logo.png" alt="logo" />

          {!isTablet && (
            <Box paddingLeft={12}>
              <InputSearch />
            </Box>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box display="flex" gap={2}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <ProfileAvatar title="Ayham Bani yasen" altText="Ayham@insurance.com" />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer  anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <RightBar anchor="left" setOpen={()=>{setDrawerOpen(false)}} />
      </Drawer>
    </Box>
  );
}
