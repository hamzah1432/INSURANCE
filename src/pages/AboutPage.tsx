import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(45deg, #D3492F 30%, #7153D8 90%)`,
  color: 'white',
  padding: theme.spacing(15, 0),
  textAlign: 'center',
}));

const StyledCard = styled(Card)(() => ({
  height: '100%',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const teamMembers = [
  { name: 'John Doe', role: 'CEO', avatar: 'J' },
  { name: 'Jane Smith', role: 'CTO', avatar: 'J' },
  { name: 'Mike Johnson', role: 'Lead Designer', avatar: 'M' },
];

const About: React.FC = () => {
  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>Insurance</Typography>
          <Typography variant="h5">Leading the Future of Insurance Technology</Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom color="#D3492F">Our Mission</Typography>
              <Typography variant="body1" paragraph>
                We're committed to revolutionizing the insurance industry through innovative technology
                and exceptional customer service.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom color="#7153D8">Our Vision</Typography>
              <Typography variant="body1" paragraph>
                To create a world where insurance is accessible, transparent, and tailored to 
                individual needs through cutting-edge technology.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" textAlign="center" gutterBottom>Our Team</Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <StyledCard elevation={4}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        margin: '0 auto 16px',
                        bgcolor: '#D3492F',
                      }}
                    >
                      {member.avatar}
                    </Avatar>
                    <Typography variant="h6" gutterBottom>{member.name}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {member.role}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;