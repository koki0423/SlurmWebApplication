import React from 'react';
import { Box } from '@mui/material';
import { GoogleIcon, MicrosoftIcon } from './Icons';

function LoginOptions() {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
            <GoogleIcon style={{ width: '40%', height: 'auto', cursor: 'pointer' }} />
            <MicrosoftIcon style={{ width: '40%', height: 'auto', cursor: 'pointer' }} />
        </Box>
    );
}

export default LoginOptions;
