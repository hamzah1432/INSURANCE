import React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/ButtomNav';

const MobileLayout: React.FC = () => (
    <div>
        <Header />
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
                <Toolbar />
            </Box>
        </Box>
        <BottomNav />
    </div>
);





export default MobileLayout;