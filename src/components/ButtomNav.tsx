import React from 'react';
import { Home, Settings, Apartment, Info } from '@mui/icons-material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from 'react-router-dom';

const BottomNav: React.FC = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/insurance');
                break;
            case 2:
                navigate('/settings');
                break;
            case 3:
                navigate('/help');
                break;
            default:
                break;
        }
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            style={{ position: 'fixed', bottom: 0, width: '100%' }}
        >
            <BottomNavigationAction label="Home" icon={<Home />} />
            <BottomNavigationAction label="Apartment" icon={<Apartment />} />
            <BottomNavigationAction label="Settings" icon={<Settings />} />
            <BottomNavigationAction label="Info" icon={<Info />} />
        </BottomNavigation>
    );
};

export default BottomNav;