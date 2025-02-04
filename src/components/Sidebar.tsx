import { Box, Drawer, CssBaseline, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Card, CardContent, Avatar, colors, Typography, Alert, Button } from '@mui/material';
import { Home, Settings, Apartment, Info } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import CardReminder from './CardReminder';

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
            <Button variant="contained" startIcon={<AddIcon />} fullWidth>new insurance</Button>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
//bgcolor:"#F5F5F5",height:"100%"