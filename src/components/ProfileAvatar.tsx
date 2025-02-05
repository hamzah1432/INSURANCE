import { AccountCircle, Person, Settings, Logout } from '@mui/icons-material';
import { Button, Box, Badge, Avatar, Menu, MenuItem, Divider } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import React, { useState } from 'react';

interface ProfileAvatarProps {
    title?: string;
    altText?: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ title, altText }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button 
                variant='text' 
                sx={{ borderRadius: "2px" }}
                onClick={handleClick}
                aria-controls={open ? 'profile-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Box display="flex" alignItems="center" gap={1}>
                    <Box display={{ xs: 'none', sm: 'none', md: 'flex' }} flexDirection="column" alignItems="flex-end">
                        <Typography variant="subtitle2" color="textPrimary">{title}</Typography>
                        <Typography variant="caption" color="textDisabled">{altText}</Typography>
                    </Box>
                    <Badge color="error" overlap="circular" badgeContent="1" anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}>
                        <Avatar sx={{ backgroundColor: "#FDE7E3" }} >
                            <AccountCircle color="primary" />
                        </Avatar>
                    </Badge>
                </Box>
            </Button>
            <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    sx: { width: '250px', mt: 1 }
                }}
            >
                <Box sx={{ px: 2, py: 1 }}>
                    <Typography variant="subtitle1">{title}</Typography>
                    <Typography variant="body2" color="textSecondary">{altText}</Typography>
                </Box>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <Person sx={{ mr: 2 }} />
                    Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Settings sx={{ mr: 2 }} />
                    My account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Logout sx={{ mr: 2 }} />
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default ProfileAvatar;