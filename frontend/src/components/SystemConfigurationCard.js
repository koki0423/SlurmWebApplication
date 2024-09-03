//src/component/SystemConfigurationCard.js

import * as React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell, TableBody
} from "@mui/material";

const SystemConfigurationCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom sx={{fontWeight: 'bold'}}>
                    システム構成
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ノードタイプ</TableCell>
                                <TableCell align="center">CPU</TableCell>
                                <TableCell align="center">Memory</TableCell>
                                <TableCell align="center">Storage</TableCell>
                                <TableCell align="center">GPU</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">CPUノード</TableCell>
                                <TableCell align="center">Xeon Silver 4110 16C32T</TableCell>
                                <TableCell align="center">8GB</TableCell>
                                <TableCell align="center">6TB<br/>(外部)</TableCell>
                                <TableCell align="center">なし</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">GPUノード</TableCell>
                                <TableCell align="center">Xeon E5-2630L v3 8C16T</TableCell>
                                <TableCell align="center">16GB</TableCell>
                                <TableCell align="center">6TB<br/>(外部)</TableCell>
                                <TableCell align="center">Tesla P100</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}

export default SystemConfigurationCard;