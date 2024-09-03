// src/pages/SystemDetailAndMonitor.js

import * as React from 'react';
import Header from "../../components/Header";
import {
    Box,
    Container,
    Typography,
    Grid
} from "@mui/material";
import Footer from "../../components/Footer";
import SystemStatusCard from "../../components/SystemStatusCard";
import WaitingJobNumCard from "../../components/WaitingJobNumCard";
import SystemConfigurationCard from "../../components/SystemConfigurationCard";
import NetworkConfigurationCard from "../../components/NetworkConfigurationCard";

const SystemDetailAndMonitor = () => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Container sx={{ flex: '1', mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    システム構成と稼働状況
                </Typography>

                <Grid container spacing={2}>
                    {/* 稼働状況と待機中のジョブ数を横並びに配置 */}
                    <Grid item xs={12} md={4}>
                        <SystemStatusCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <WaitingJobNumCard />
                    </Grid>

                    {/* システム構成 */}
                    <Grid item xs={12} md={8}>
                        <SystemConfigurationCard />
                    </Grid>

                    {/* ネットワーク構成 */}
                    <Grid item xs={12} md={8} mb={2}>
                        <NetworkConfigurationCard />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
}

export default SystemDetailAndMonitor;
