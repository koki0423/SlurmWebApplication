//src/components/Footer.js

import * as React from "react"
import {Link} from "react-router-dom";
import {Box,  Typography} from "@mui/material";

const Footer=()=>{
    return (
        <div>
            <footer style={{backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center'}}>
                <Typography variant="body2">© 2024 Omochi Lab</Typography>
                <Box mt={1}>
                    <Link to="/privacy" style={{color: '#bbb', marginRight: '15px'}}>プライバシーポリシー</Link>
                    <Link to="/terms" style={{color: '#bbb', marginRight: '15px'}}>利用規約</Link>
                    <Link to="/contact" style={{color: '#bbb'}}>問い合わせ</Link>
                </Box>
            </footer>
        </div>
    );
}
export default Footer;