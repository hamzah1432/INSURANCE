import React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import RightBar from '../components/RightBar';



const DesktopLayout: React.FC = () => (
    <div>
        <Header />
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
            <RightBar />
        </Box>
    </div>
);

export default DesktopLayout;