//src/component/SystemStatusCard.js

import * as React from 'react';
import { Box, Typography, Card, CardContent } from "@mui/material";

const SystemStatusCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    稼働状況
                </Typography>
                <Box>
                    <Typography variant="body1">CPUノード</Typography>
                    <Typography variant="body1">GPUノード</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default SystemStatusCard;