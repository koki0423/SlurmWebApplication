import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChangePassword = () => {
        // パスワード変更処理
        alert('パスワードが変更されました');
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    パスワード変更
                </Typography>
                <TextField
                    fullWidth
                    label="現在のパスワード"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="新しいパスワード"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleChangePassword}>
                    パスワードを変更
                </Button>
            </CardContent>
        </Card>
    );
};

export default ChangePassword;
