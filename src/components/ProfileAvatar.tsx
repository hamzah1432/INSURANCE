import { AccountCircle } from '@mui/icons-material';
import { Button, Box, Badge, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';

interface ProfileAvatarProps {
    title: string;
    altText: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ title, altText }) => {
    return (
        <Button variant='text' sx={{ borderRadius: "2px" }}>
            <Box display="flex" alignItems="center" gap={1}>
                <Box display="flex" flexDirection="column" alignItems="flex-end">
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
    );
};

export default ProfileAvatar;