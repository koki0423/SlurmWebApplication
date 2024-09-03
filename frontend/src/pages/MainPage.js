// src/pages/MainPage.js
import React from 'react';
import {Typography, Container, Box, Grid} from "@mui/material";
import {Card, CardActionArea, CardContent} from '@mui/material';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer'
const MainPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header/>
            <Container style={{ flex: '1' }}>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom sx={{mt: 5}}>
                        本ページについて
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        これは、MUIを使用したメインページです.
                    </Typography>

                    <Typography variant="h4" gutterBottom sx={{mt: 5}}>
                        サービス一覧
                    </Typography>
                    <Typography valiant={"h6"}>* ユーザー登録が必要なサービス</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea component={Link} to="/service1">
                                    <CardContent>
                                        <Typography variant="h6" style={{fontWeight: 'bold'}}>* Nextcloud</Typography>
                                        <Typography variant="body1">クラウドストレージを利用できます</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea component={Link} to="/service2">
                                    <CardContent>
                                        <Typography variant="h6" style={{fontWeight: 'bold'}}>* 計算リソース提供サービス</Typography>
                                        <Typography variant="body1">CPUとGPUのサーバーを利用できます*</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4} >
                            <Card>
                                <CardActionArea component={Link} to="/service3">
                                    <CardContent>
                                        <Typography variant="h6" style={{fontWeight: 'bold'}}>システム構成と稼働状況</Typography>
                                        <Typography variant="body1">システムの構成と稼働状況を見られます</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer/>
        </div>
    )
}
export default MainPage;