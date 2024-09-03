//src/pages/NextcloudService.js

import * as React from 'react';
import Header from "../../components/Header";
import {Button, Container, Grid, Typography, useMediaQuery} from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';

import {Link} from "react-router-dom";
import Footer from "../../components/Footer";

const NextcloudService = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header/>
            <Container style={{flex: '1'}}>
                {/* サービス概要セクション */}
                <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', color: 'primary.main', mt: 5}}>
                    <CloudIcon sx={{mr: 1}}/> クラウドストレージサービス
                </Typography>

                <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2}}>
                    <StorageIcon sx={{mr: 1}}/> サービス概要
                </Typography>
                <Typography variant="h6" gutterBottom sx={{mb: 2}}>
                    本サービスではクラウドストレージを利用することができます．
                </Typography>


                {/* プランセクションの追加 */}
                <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2}}>
                    プラン
                </Typography>
                <Typography variant="h6" gutterBottom sx={{mb: 2}}>
                    - 標準プラン: 5GB - 月額 ¥0
                </Typography>
                <Typography variant="h6" gutterBottom sx={{mb: 5}}>
                    - 大容量プラン: 100GB - 月額 ¥0 (<b>要申請</b>)
                </Typography>

                {/* 利用開始ボタン */}
                <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2}}>
                    利用にはユーザー登録が必要です
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"  // ボタンの色を変更
                    component={Link}
                    to="/login"
                    sx={{
                        textTransform: 'none',
                        fontSize: '18px',  // フォントサイズを大きく
                        padding: '12px 24px',  // パディングを増やす
                        backgroundColor: '#ff9800', // 目立つ色に変更
                        '&:hover': {
                            backgroundColor: '#e68900', // ホバー時の色
                        }
                    }}
                >
                    利用開始する
                </Button>
            </Container>
            <Footer/>
        </div>
    );
}

export default NextcloudService;