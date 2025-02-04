import { Box, Card, Drawer, Toolbar, Typography } from '@mui/material';

import CardReminder from './CardReminder';

const drawerWidth = 280;
export default function RightBar() {
    return (

        <Drawer
            variant="permanent"
            anchor="right"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                zIndex: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',flexGrow:1 },
            }}
        >
            <Toolbar />
            <Toolbar />
            <Box sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column', gap: "20px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: "16px 24px", gap: "8px", bgcolor: "#F5F5F5" }}>
                    <Typography variant="h6" style={{ fontWeight: '600' }}>Reminders</Typography>
                    <CardReminder date="7 Dec" title='Health dupa' description='Note here' Dueto='Due tomorrow' />
                    <CardReminder date="17 Dec" title='Health dupa' description='Note here' Dueto='Due tomorrow' />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: "16px 24px", gap: "8px", bgcolor: "#F5F5F5" }}>
                    <Typography variant="h6" style={{ fontWeight: '600' }}>New Alert</Typography>
                    <Card sx={{ display: "flex", flexDirection: "column", padding: "8px", gap: "8px" }}>
                        <Typography variant="subtitle2" >New notification here</Typography>
                        <Typography variant="caption" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                        <Typography variant="caption" ><a href='#'>Read more</a></Typography>
                    </Card>
                </Box>
            </Box>
        </Drawer>
    );
}
//bgcolor:"#F5F5F5",height:"100%"