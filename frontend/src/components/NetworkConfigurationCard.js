//src/component/NetworkConfigurationCard.js

import * as React from 'react';
import { Box, Typography, Card, CardContent } from "@mui/material";
import img from "../assets/images/network_diagram.jpg";

const NetworkConfigurationCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom sx={{fontWeight: 'bold'}}>
                    ネットワーク構成
                </Typography>
                <Box>
                    <img
                        alt="ネットワーク構成"
                        src={img}
                        style={{maxWidth: '100%', height: 'auto'}}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}

export default NetworkConfigurationCard;