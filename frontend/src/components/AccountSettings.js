import React from 'react';
import {Card, CardContent, Typography, Button} from "@mui/material";

const AccountSettings = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    アカウント設定
                </Typography>
                <Button variant="outlined" color="primary" style={{marginLeft: '10px'}}>
                    名前の変更
                </Button>
                <Button variant="outlined" color="primary" style={{marginLeft: '10px'}}>
                    メールアドレスを変更
                </Button>
                <Button variant="outlined" color="primary" style={{marginLeft: '10px'}}>
                    通知設定
                </Button>
            </CardContent>
        </Card>
    );
};

export default AccountSettings;
