import React from "react";
import InsuranceCard from "../components/InsuranceCard";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import { Typography } from "@mui/material";
import AlertInfo from "../components/AlertInfo";
import UploadFile from "../components/UploadFile";



const Home: React.FC = () => {
    return (
      <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" ,flex: 2 }}>
            <AlertInfo title="Welcome Ayham!" message="Check out your latest updates" />
            <Typography variant="h3" style={{ fontWeight: 'bold' }}>Insurance</Typography>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <InsuranceCard policyHolderName="Auto Insurance" progress={50} icon={<CarCrashIcon />} />
                <InsuranceCard policyHolderName="John Doe" progress={50} icon={<CarCrashIcon />} />
                <InsuranceCard policyHolderName="John Doe" progress={50} icon={<CarCrashIcon />} />
            </div>
            <Typography variant="h3" style={{ fontWeight: 'bold' }}>Documents</Typography>
            <UploadFile />
        </div>
      </div>
    );
};

export default Home;