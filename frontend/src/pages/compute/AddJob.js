import React, { useState } from 'react';
import { Container, Typography, Box, Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AddJob = () => {
    const [file, setFile] = useState(null);
    const [resource, setResource] = useState('');
    const [memory, setMemory] = useState('');
    const [jobTime, setJobTime] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const fileExtension = selectedFile.name.split('.').pop();
            const allowedExtensions = ['c', 'java', 'py'];
            if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
                alert('C、Java、Pythonファイルのみアップロード可能です。');
                return;
            }
            setFile(selectedFile);
        }
    };

    const handleSubmit = () => {
        if (!file) {
            alert("プログラムファイルを選択してください");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('resource', resource);
        formData.append('memory', memory);
        formData.append('jobTime', jobTime);

        console.log('Job Submitted:', formData);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Container style={{ flex: '1' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mt: 5 }}>
                    ジョブ送信ページ
                </Typography>

                <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
                    <Button
                        variant="contained"
                        component="label"
                        sx={{ mb: 3 }}
                    >
                        プログラムファイルを選択
                        <input
                            type="file"
                            accept=".c,.java,.py"
                            hidden
                            onChange={handleFileChange}
                        />
                    </Button>
                    {file && <Typography variant="body1" sx={{ mb: 3 }}>{file.name}</Typography>}

                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>リソース</InputLabel>
                        <Select
                            value={resource}
                            onChange={(e) => setResource(e.target.value)}
                            label="リソース"
                        >
                            <MenuItem value="CPU">CPU</MenuItem>
                            <MenuItem value="GPU">GPU</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        fullWidth
                        label="必要メモリ (GB, 最大10GB)"
                        variant="outlined"
                        type="number"
                        value={memory}
                        InputProps={{ inputProps: { min: 0, max: 10 } }}
                        onChange={(e) => setMemory(e.target.value)}
                        sx={{ mb: 3 }}
                    />

                    <TextField
                        fullWidth
                        label="ジョブ実行時間 (分, 最大10分)"
                        variant="outlined"
                        type="number"
                        value={jobTime}
                        InputProps={{ inputProps: { min: 0, max: 10 } }}
                        onChange={(e) => setJobTime(e.target.value)}
                        sx={{ mb: 3 }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ textTransform: 'none', fontSize: '18px', padding: '12px 24px' }}
                    >
                        ジョブを送信する
                    </Button>
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default AddJob;
