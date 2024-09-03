import React from 'react';
import { Typography, Container, Box } from "@mui/material";
import LoginForm from '../components/common/LoginForm';
import LoginOptions from '../components/common/LoginOptions';
import Header from '../components/Header';
import Footer from "../components/Footer";

const Login = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header/>
            <Container maxWidth="sm" style={{flex: '1'}}>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        ログイン
                    </Typography>
                    <LoginForm />
                    <Typography variant="h5" gutterBottom>
                        または他の方法でログイン（まだ飾り）
                    </Typography>
                    <LoginOptions/>
                    <Typography variant="h5" gutterBottom mt={5}>
                        新規登録について
                    </Typography>
                    <Typography >
                        <ul>
                            <li>直接お問い合わせ下さい</li>
                        </ul>
                    </Typography>
                </Box>
            </Container>
            <Footer/>
        </div>
    );
};

export default Login;
