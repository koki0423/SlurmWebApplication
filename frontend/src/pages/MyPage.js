import * as React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Typography, Box } from "@mui/material";
import UserProfile from "../components/UserProfile";
import AccountSettings from "../components/AccountSettings";
import ActivityHistory from "../components/ActivityHistory";
import ChangePassword from "../components/ChangePassword";

const MyPage = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column',minHeight: '100vh'}}>
            <Header/>
            <Container maxWidth="md" style={{flex:'1'}}>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        マイページ
                    </Typography>
                    <Box my={2}>
                        <UserProfile />
                    </Box>
                    <Box my={2}>
                        <AccountSettings />
                    </Box>
                    <Box my={2}>
                        <ActivityHistory />
                    </Box>
                    <Box my={2}>
                        <ChangePassword />
                    </Box>
                </Box>
            </Container>
            <Footer/>
        </div>
    );
};

export default MyPage;
