import { Box, Card, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import CardReminder from './CardReminder';

const drawerWidth = 280;

interface RightBarProps {
    anchor?: "right" | "left";
    open?: boolean;
    setOpen?: (open: boolean) => void;
}

export default function RightBar({ anchor = "right", open = false, setOpen }: RightBarProps) {
    return (

        <Drawer
            variant="permanent"
            anchor={anchor}
            open={open}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                zIndex: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', flexGrow: 1 },
            }}
        >
            {
                anchor == "left" ? 
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
                    <img width={142} src="/logo.png" alt="logo" />
                    <IconButton onClick={() => setOpen && setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box> 
                : <Toolbar />
            }
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