import { Stepper, Step, StepLabel, Card, Typography, TextField, MenuItem, Select, FormControl, InputLabel, Button, Box, ListItemIcon } from "@mui/material";
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Dayjs } from 'dayjs';
import FormControlStep from './FormControlStep';
import SummaryStep from './SummaryStep';

const FormStepper: React.FC = () => {
    const steps = [
        'Basic info',
        'Details',
        'Overview',
    ];

    const [activeStep, setActiveStep] = React.useState(0);
    const [formData, setFormData] = React.useState({
        insuranceName: '',
        insuranceType: '',
        budget: '',
        dateFrom: null as Dayjs | null,
        dateTo: null as Dayjs | null,
        selectOption: ''
    });

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (field: string, value: any) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    return (
        <Card sx={{ 
            padding: 5, 
            display: "flex", 
            gap: "24px", 
            flexDirection: "column",
            width: { xs: 412, md: 680 }  // Adjust width based on screen size
        }}
            onClick={(e) => e.stopPropagation()}
        >
            <Typography variant="h6">Set new insurance</Typography>

            <Stepper sx={{ marginBottom: "10px" }} activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === 0 && (
                <>
                    <TextField
                        label="insurance name"
                        variant="outlined"
                        value={formData.insuranceName}
                        onChange={(e) => handleChange('insuranceName', e.target.value)}
                    />
                    <FormControl variant="outlined">
                        <InputLabel id="insurance-type-label">Insurance Type</InputLabel>
                        <Select
                            labelId="insurance-type-label"
                            label="Insurance Type"
                            value={formData.insuranceType}
                            onChange={(e) => handleChange('insuranceType', e.target.value)}
                        >
                            <MenuItem value="health">
                                <ListItemIcon sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <FavoriteIcon />
                                    <Typography variant="subtitle1" >Health</Typography>
                                </ListItemIcon>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </>
            )}
            {activeStep === 1 && (
                <FormControlStep
                    {...formData}
                    setSelectOption={(value) => handleChange('selectOption', value)}
                    setDateFrom={(value) => handleChange('dateFrom', value)}
                    setDateTo={(value) => handleChange('dateTo', value)}
                    setBudget={(value) => handleChange('budget', value)}
                />
            )}

            {activeStep === 2 && (
                <SummaryStep
                    insuranceName={formData.insuranceName}
                    insuranceType={formData.insuranceType}
                    budget={formData.budget}
                    dateFrom={formData.dateFrom ? formData.dateFrom.toDate() : null}
                    dateTo={formData.dateTo ? formData.dateTo.toDate() : null}
                    selectOption={formData.selectOption}
                />
            )}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                </Button>
                <Button variant="contained" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </Box>
        </Card>
    )
};

export default FormStepper;