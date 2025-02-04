import { AppBar, Box, Toolbar, IconButton, Badge, Avatar, Typography, Button, } from '@mui/material';
import { AccountCircle, Notifications as NotificationsIcon } from '@mui/icons-material';
import InputSearch from './InputSearch';
import ProfileAvatar from './ProfileAvatar';

export default function Header() {
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
          <img src="/logo.png" alt="logo" />
          <Box paddingLeft={12}>
            <InputSearch />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box display="flex" gap={2}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          <ProfileAvatar title="Ayham Bani yasen" altText="Ayham Bani yasen" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
