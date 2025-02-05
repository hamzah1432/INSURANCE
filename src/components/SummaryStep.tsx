import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { AccessTime, AttachMoney, EventAvailable, EventBusy, Label } from '@mui/icons-material';

interface SummaryStepProps {
    insuranceName: string;
    insuranceType: string;
    budget: string;
    dateFrom: Date | null;
    dateTo: Date | null;
    selectOption: string;
}

const SummaryStep: React.FC<SummaryStepProps> = ({ insuranceName, insuranceType, budget, dateFrom, dateTo, selectOption }) => {
    return (
        <Box sx={{ margin: "20px", backgroundColor: "#f5f5f5", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <Card variant="outlined" sx={{ padding: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                    <Label sx={{ marginRight: "8px" }} /> Insurance Name: {insuranceName}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                    <Label sx={{ marginRight: "8px" }} /> Insurance Type: {insuranceType}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                    <AttachMoney sx={{ marginRight: "8px" }} /> Budget: {budget}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                    <EventAvailable sx={{ marginRight: "8px" }} /> From: {dateFrom ? dateFrom.toLocaleDateString('en-US') : ''}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                    <EventBusy sx={{ marginRight: "8px" }} /> To: {dateTo ? dateTo.toLocaleDateString('en-US') : ''}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                    <AccessTime sx={{ marginRight: "8px" }} /> Selected Option: {selectOption}
                </Typography>
            </Card>
        </Box>
    );
};

export default SummaryStep;