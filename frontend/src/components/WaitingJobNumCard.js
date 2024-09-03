//src/component/WaitingJobNumCard.js

import * as React from 'react';
import { Box, Typography, Card, CardContent } from "@mui/material";

const WaitingJobNumCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    待機中のジョブ数
                </Typography>
                <Box>
                    <Typography variant="body1">CPUノード</Typography>
                    <Typography variant="body1">GPUノード</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default WaitingJobNumCard;