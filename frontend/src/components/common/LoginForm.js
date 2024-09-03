import React, { useState } from 'react';
import { TextField, Button, Box } from "@mui/material";
import { login } from '../../services/AccountOperation';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            alert('メールアドレスとパスワードを入力してください');
            return;
        }

        const result = await login(email, password);
        if (result.success) {
            alert('ログイン成功！');
            // ログイン後の処理
        } else {
            alert('ログイン失敗。メールアドレスかパスワードが間違っています。');
        }
    };

    return (
        <form noValidate autoComplete="off">
            <TextField
                fullWidth
                id="email"
                label="Email Address"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                fullWidth
                id="password"
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Box my={2}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                >
                    ログイン
                </Button>
            </Box>
        </form>
    );
};

export default LoginForm;
