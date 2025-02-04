import { Collapse, Alert, IconButton, AlertTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

interface AlertInfoProps {
    message: string;
    title: string;
}

const AlertInfo: React.FC<AlertInfoProps> = ({ message, title }) => {
    const [open, setOpen] = React.useState(true);

    return (
        <Collapse in={open}>
            <Alert severity="info" action={<IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    setOpen(false);
                }}
            > <CloseIcon /></IconButton>} >
                <AlertTitle>{title}</AlertTitle>
                {message}
            </Alert>
        </Collapse>
    );
};

export default AlertInfo;