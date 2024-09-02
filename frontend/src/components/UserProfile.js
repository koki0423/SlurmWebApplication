import React from 'react';
import { Card, CardContent, Typography } from "@mui/material";

const UserProfile = () => {
    return (
        <Card mb={2}>
            <CardContent >
                <Typography variant="h5" component="h2">
                    ユーザープロフィール
                </Typography>
                <Typography color="textSecondary">
                    名前: 山田太郎
                </Typography>
                <Typography color="textSecondary">
                    メール: taro@example.com
                </Typography>
                {/* ここに他のプロフィール情報を追加 */}
            </CardContent>
        </Card>
    );
};

export default UserProfile;
