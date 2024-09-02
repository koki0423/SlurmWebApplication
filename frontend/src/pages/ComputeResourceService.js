//src/pages/ComputeResourceService.js

import * as React from 'react';
import Header from "../components/Header";
import {Button, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

const ComputeResourceService = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden'}}>
            <Header/>
            <Grid container spacing={3} sx={{ml: 4, mt: 2}} style={{flex: '1'}}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', color: 'primary.main'}}>
                        計算リソース提供サービス
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2}}>
                        サービス概要
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{mb: 2}}>
                        本サービスでは以下の計算機リソースを利用することができます．
                    </Typography>
                    <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2}}>
                        利用可能なリソース
                    </Typography>
                    <ul style={{paddingLeft: '20px', marginBottom: '16px'}}>
                        <li>CPU: Xeon Silver</li>
                        <li>GPU:  Tesla P100</li>
                    </ul>
                    <Typography variant="h6" sx={{mt: 2}}>
                        詳細なマシンスペックは<Link to="/service3" style={{
                        color: '#3f51b5',
                        textDecoration: 'none',
                        fontWeight: 'bold'
                    }}>こちら</Link>を参照
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

export default ComputeResourceService;