import React from 'react';
import { Card, CardContent, Typography } from "@mui/material";

const ActivityHistory = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    アクティビティ履歴
                </Typography>
                <Typography color="textSecondary">
                    2024/09/01 - ログイン
                </Typography>
                <Typography color="textSecondary">
                    2024/08/31 - プロフィール更新
                </Typography>
                {/* 他のアクティビティ履歴を追加 */}
            </CardContent>
        </Card>
    );
};

export default ActivityHistory;
