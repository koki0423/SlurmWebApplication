//src/pages/ComputeResourceService.js

import * as React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Button, Typography, Container} from "@mui/material";
import ComputerIcon from '@mui/icons-material/Computer';
import MemoryIcon from '@mui/icons-material/Memory';
import {Link} from "react-router-dom";


const ComputeResourceService = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header/>
            <Container style={{flex: '1'}}>
                {/* サービス概要セクション */}
                <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', color: 'primary.main', mt: 5}}>
                    <ComputerIcon sx={{mr: 1}}/> 計算リソース提供サービス
                </Typography>

                <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2}}>
                    サービス概要
                </Typography>
                <Typography variant="h6" gutterBottom sx={{mb: 2}}>
                    本サービスでは以下の計算機リソースを利用することができます．
                </Typography>

                {/* 利用可能なリソースセクション */}
                <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2}}>
                    <MemoryIcon sx={{mr: 1}}/> 利用可能なリソース
                </Typography>
                <ul style={{paddingLeft: '20px', marginBottom: '16px'}}>
                    <li>CPU: Xeon Silver</li>
                    <li>GPU: Tesla P100</li>
                </ul>

                {/* マシンスペックのリンク */}
                <Typography variant="h6" sx={{mt: 2}}>
                    詳細なマシンスペックは<Link to="/service3" style={{
                    color: '#3f51b5',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                }}>こちら</Link>を参照
                </Typography>

                {/* 利用開始ボタン */}
                <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2, mt: 4}}>
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

export default ComputeResourceService;