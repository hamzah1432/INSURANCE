import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  backgroundColor: '#fff',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const HelpPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const faqData = [
    {
      question: 'How do I file a claim?',
      answer: 'You can file a claim through our online portal or by calling our claims department.',
    },
    {
      question: 'What insurance plans do you offer?',
      answer: 'We offer various insurance plans including health, life, auto, and property insurance.',
    },
    {
      question: 'How long does it take to process a claim?',
      answer: 'Most claims are processed within 5-7 business days after submission.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          mb: 4,
          color: '#D3492F',
          fontWeight: 'bold',
        }}
      >
        How Can We Help You?
      </Typography>

      <Grid container spacing={4}>
        {/* Support Cards */}
        <Grid item xs={12} md={4}>
          <StyledPaper elevation={1}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <EmailIcon sx={{ fontSize: 40, color: '#7153D8' }} />
              <Typography variant="h6">Email Support</Typography>
              <Typography align="center">support@insurance.com</Typography>
            </Box>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={4}>
          <StyledPaper elevation={1}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <PhoneIcon sx={{ fontSize: 40, color: '#7153D8' }} />
              <Typography variant="h6">Phone Support</Typography>
              <Typography align="center">1-800-123-4567</Typography>
            </Box>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={4}>
          <StyledPaper elevation={1}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <LiveHelpIcon sx={{ fontSize: 40, color: '#7153D8' }} />
              <Typography variant="h6">Live Chat</Typography>
              <Typography align="center">Available 24/7</Typography>
            </Box>
          </StyledPaper>
        </Grid>

        {/* FAQ Section */}
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Typography variant="h4" sx={{ mb: 3, color: '#D3492F' }}>
            Frequently Asked Questions
          </Typography>
          {faqData.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="medium">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3, color: '#D3492F' }}>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: '#D3492F',
                      '&:hover': { backgroundColor: '#7153D8' },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HelpPage;