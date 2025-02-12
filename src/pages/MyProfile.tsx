import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Avatar,
  Grid,
  TextField,
  Button,
  Divider,
  IconButton,
  Stack,
  Switch,
} from '@mui/material';
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';

const MyProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: '123 Main St, City, Country',
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add API call to save data
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* Profile Header */}
          <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" fontWeight="bold">My Profile</Typography>
            <IconButton onClick={handleEdit} color="primary">
              {isEditing ? <SaveIcon onClick={handleSave} /> : <EditIcon />}
            </IconButton>
          </Grid>

          {/* Avatar Section */}
          <Grid item xs={12} md={3} display="flex" flexDirection="column" alignItems="center">
            <Avatar
              sx={{ width: 120, height: 120, mb: 2 }}
              src="/path-to-avatar.jpg"
            />
            <Button variant="outlined" size="small">
              Change Photo
            </Button>
          </Grid>

          {/* Profile Information */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={profileData.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                  multiline
                  rows={2}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Settings Section */}
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" sx={{ mb: 2 }}>Settings</Typography>
            <Stack spacing={2}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={1}>
                  <NotificationsIcon />
                  <Typography>Notifications</Typography>
                </Box>
                <Switch defaultChecked />
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={1}>
                  <SecurityIcon />
                  <Typography>Two-Factor Authentication</Typography>
                </Box>
                <Switch />
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={1}>
                  <LanguageIcon />
                  <Typography>Language Preferences</Typography>
                </Box>
                <Button variant="text">English</Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MyProfile;