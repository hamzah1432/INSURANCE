import React, { useState } from "react";
import InsuranceCard from "../components/InsuranceCard";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, List, Typography } from "@mui/material";
import AlertInfo from "../components/AlertInfo";
import UploadFile from "../components/UploadFile";
import FormStepper from "../components/FormStepper";


const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", flex: 2 }}>
        <AlertInfo title="Welcome Ayham!" message="Check out your latest updates" />
        <Typography variant="h3" style={{ fontWeight: 'bold' }}>Insurance</Typography>
        <Box sx={{ display: { xs: 'block', md: 'none' } }} >
          <List>
            <Button variant="contained" startIcon={<AddIcon />} fullWidth onClick={handleButtonClick}>
              new insurance
            </Button>
          </List>
        </Box>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <InsuranceCard policyHolderName="Auto Insurance" progress={50} icon={<CarCrashIcon />} />
          <InsuranceCard policyHolderName="John Doe" progress={50} icon={<CarCrashIcon />} />
          <InsuranceCard policyHolderName="John Doe" progress={50} icon={<CarCrashIcon />} />
        </div>
        <Typography variant="h3" style={{ fontWeight: 'bold' }}>Documents</Typography>
        <UploadFile />
      </div>
      {showPopup && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1300,
          }}
          onClick={handleClosePopup}
        >
          <FormStepper />
        </Box>
      )}
    </div>
  );
};

export default Home;