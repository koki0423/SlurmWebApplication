//src/pages/NextcloudService.js

import * as React from 'react';
import Header from "../components/Header";
import {Button, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

const NextcloudService = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden'}}>
            <Header/>
            <Grid container spacing={3} sx={{ml: 4, mt: 2}} style={{flex: '1'}}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', color: 'primary.main'}}>
                        クラウドストレージサービス
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2}}>
                        サービス概要
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{mb: 2}}>
                        本サービスではクラウドストレージを利用することができます．
                    </Typography>
                    <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2}}>
                        標準利用可能容量: 100GB
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2}}>
                        利用にはユーザー登録が必要です
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/login"
                        sx={{textTransform: 'none', fontSize: '16px', padding: '8px 16px'}}
                    >
                        利用開始する
                    </Button>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    );
}

export default NextcloudService;