import React from 'react';
import Header from '../components/Header';
import { Box, CssBaseline, Toolbar, } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/Sidebar';
import RightBar from '../components/RightBar';
import useMediaQuery from '@mui/material/useMediaQuery';

const Layout: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div >
            <Header />
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                {!isMobile && <SideBar />}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Outlet />
                </Box>
                {!isMobile && <RightBar />}
            </Box>
        </div>
    );
};

export default Layout;