//src/pages/SystemDetailAndMonitor.js

import * as React from 'react';
import Header from "../components/Header";
import {Box, Container, Typography} from "@mui/material";
import {Card, CardContent, Grid} from "@mui/material";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Footer from "../components/Footer";

import img from '../assets/images/network_diagram.jpg';

const SystemDetailAndMonitor = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header/>
            <Container style={{flex: '1'}}>
                <Typography variant="h4" gutterBottom mt={4}>
                    システム構成と稼働状況
                </Typography>

                <Grid container spacing={2}>
                    {/* 稼働状況 */}
                    <Grid item xs={12} md={4}>{/*横幅を12分割したうち，左で4を占める*/}
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom style={{fontWeight: 'bold'}}>
                                    稼働状況
                                </Typography>
                                <Box mb={2}>
                                    <Typography variant="body1">CPUノード</Typography>
                                    <Typography variant="body1">GPUノード</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                        <Box mt={2}> {/* 隙間を作るためにBoxコンポーネントを追加 */}
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom style={{fontWeight: 'bold'}}>
                                        待機中のジョブ数
                                    </Typography>
                                    <Box mb={2}>
                                        <Typography variant="body1">CPUノード</Typography>
                                        <Typography variant="body1">GPUノード</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>

                    {/* システム構成 */}
                    <Grid item xs={12} md={8}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom style={{fontWeight: 'bold'}}>
                                    システム構成
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    CPUノード
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align={"center"}>ノードタイプ</TableCell>
                                                <TableCell align={"center"}>CPU</TableCell>
                                                <TableCell align={"center"}>Memory</TableCell>
                                                <TableCell align={"center"}>Storage</TableCell>
                                                <TableCell align={"center"}>GPU</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {/* CPUノードのデータ */}
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    CPUノード
                                                </TableCell>
                                                <TableCell align={"center"}>Xeon Silver 4110 16C32T</TableCell>
                                                <TableCell align={"center"}>8GB</TableCell>
                                                <TableCell align={"center"}>6TB<br/>(外部)</TableCell>
                                                <TableCell align={"center"}>なし</TableCell>
                                            </TableRow>
                                            {/* GPUノードのデータ */}
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    GPUノード
                                                </TableCell>
                                                <TableCell align={"center"}>Xeon E5-2630L v3 8C16T</TableCell>
                                                <TableCell align={"center"}>16GB</TableCell>
                                                <TableCell align={"center"}>6TB<br/>(外部)</TableCell>
                                                <TableCell align={"center"}>Tesla P100</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8} mb={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom style={{fontWeight: 'bold'}}>
                                    ネットワーク構成
                                </Typography>
                                <img
                                    alt="ネットワーク構成"
                                    src={img}
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto'
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </div>
    );
}

export default SystemDetailAndMonitor;