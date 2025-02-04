import { Card, Avatar, Typography } from '@mui/material';
import React from 'react';

interface CardReminderProps {
    title: string;
    description: string;
    date: string;
    Dueto: string;
}

const CardReminder: React.FC<CardReminderProps> = ({ title, description, date, Dueto }) => {
    return (
        <Card  sx={{ display: "flex", gap: "8px", bgcolor: "white", padding: "8px", alignItems: "center" ,flexGrow: 1}}>
            <Avatar variant="square" sx={{ color: "#D86D07", bgcolor: "white", textAlign: "center",fontSize:"16px" }} >{date}</Avatar>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="subtitle2">{title}</Typography>
                <Typography variant="caption" color="textDisabled">{description}</Typography>
                <Typography variant="caption" color="textPrimary">{Dueto}</Typography>
            </div>
        </Card>
    );
};

export default CardReminder;