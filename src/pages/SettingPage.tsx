import React, { useState } from 'react';
import {
  Switch,
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Box,
  styled,
  Container,
  CardHeader
} from '@mui/material';
import {
  Person
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
}));

const SettingRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 0'
});

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    twoFactor: false,
    emailUpdates: true,
  });

  const handleSettingChange = (setting: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({ ...prev, [setting]: event.target.checked }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ color: '#D3492F', mb: 4 }}>
        Settings
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <StyledCard>
            <CardHeader title="Profile Settings" />
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Avatar
                  sx={{ bgcolor: '#7153D8', width: 64, height: 64 }}
                >
                  <Person sx={{ fontSize: 40 }} />
                </Avatar>
                <Box>
                  <Typography variant="h6">Ayham Bani yasen</Typography>
                  <Typography color="text.secondary">Ayham@insurance.com</Typography>
                </Box>
              </Box>
            </CardContent>
          </StyledCard>

          <StyledCard>
            <CardHeader title="Notifications" />
            <CardContent>
              <SettingRow>
                <Typography>Push Notifications</Typography>
                <Switch
                  checked={settings.notifications}
                  onChange={handleSettingChange('notifications')}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#7153D8',
                      '& + .MuiSwitch-track': {
                        backgroundColor: '#7153D8'
                      }
                    }
                  }}
                />
              </SettingRow>
              <SettingRow>
                <Typography>Email Updates</Typography>
                <Switch
                  checked={settings.emailUpdates}
                  onChange={handleSettingChange('emailUpdates')}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#7153D8',
                      '& + .MuiSwitch-track': {
                        backgroundColor: '#7153D8'
                      }
                    }
                  }}
                />
              </SettingRow>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} lg={4}>
          <StyledCard>
            <CardHeader title="Preferences" />
            <CardContent>
              <SettingRow>
                <Typography>Dark Mode</Typography>
                <Switch
                  checked={settings.darkMode}
                  onChange={handleSettingChange('darkMode')}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#7153D8',
                      '& + .MuiSwitch-track': {
                        backgroundColor: '#7153D8'
                      }
                    }
                  }}
                />
              </SettingRow>
              <SettingRow>
                <Typography>Two-Factor Auth</Typography>
                <Switch
                  checked={settings.twoFactor}
                  onChange={handleSettingChange('twoFactor')}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#D3492F',
                      '& + .MuiSwitch-track': {
                        backgroundColor: '#D3492F'
                      }
                    }
                  }}
                />
              </SettingRow>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Settings;