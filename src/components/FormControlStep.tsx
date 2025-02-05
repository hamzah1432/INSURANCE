import { Stepper, Step, StepLabel, Card, Typography, TextField, MenuItem, Select, FormControl, InputLabel, Button, Box, ListItemIcon, InputAdornment } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Dayjs } from 'dayjs';


interface FormControlStepProps {
    selectOption: string;
    setSelectOption: (value: string) => void;
    dateFrom: Dayjs | null;
    setDateFrom: (value: Dayjs | null) => void;
    dateTo: Dayjs | null;
    setDateTo: (value: Dayjs | null) => void;
    budget: string;
    setBudget: (value: string) => void;
}

const FormControlStep: React.FC<FormControlStepProps> = ({ selectOption, setSelectOption, dateFrom, setDateFrom, dateTo, setDateTo, budget, setBudget }) => {
    return (
        <>
            <TextField
                sx={{ width: "100%" }}
                label="Budget"
                variant="outlined"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CreditCardIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ display: "flex", width: "100" }} components={['DatePicker']}>
                    <DatePicker
                        sx={{ flex: 1 }}
                        label="From"
                        value={dateFrom}
                        onChange={(newValue) => setDateFrom(newValue)}
                    />
                    <DatePicker
                        sx={{ flex: 1 }}
                        label="To"
                        value={dateTo}
                        onChange={(newValue) => setDateTo(newValue)}
                    />
                </DemoContainer>
            </LocalizationProvider>
            <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel id="select-label">Select</InputLabel>
                <Select
                    labelId="select-label"
                    label="Select"
                    value={selectOption}
                    onChange={(e) => setSelectOption(e.target.value)}
                >
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default FormControlStep;