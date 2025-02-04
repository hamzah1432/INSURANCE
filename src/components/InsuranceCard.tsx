import { Avatar, Box, Card, LinearProgress, Typography } from '@mui/material';
import React from 'react';

interface InsuranceCardProps {
    icon?: React.ReactNode;
    policyHolderName?: string;
    progress?: number;
}

const InsuranceCard: React.FC<InsuranceCardProps> = ({ policyHolderName, progress = 0, icon="i" }) => {
    return (
        <Card sx={{ width: 260, padding: "16px", display: "flex", flexDirection: "column", gap: "8px",flexGrow:1 }} variant="outlined">
            <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
                <div>{policyHolderName}</div>
                <Avatar variant="rounded" sx={{ backgroundColor: "#7153D8" }}>
                    {icon}
                </Avatar>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                <LinearProgress color="secondary" variant="determinate" value={progress} sx={{ width: '80%' }} />
                <Typography variant="body2" color="textSecondary">{`${Math.round(progress)}%`}</Typography>
            </Box>
            <Box>
                <Typography variant="body2" color="textSecondary">3 in progress</Typography>

            </Box>

            {/* <div>Coverage Amount: {progress}</div> */}
        </Card>
    );
};

export default InsuranceCard;