//src/component/Header.js
import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Logo} from "./common/Icons";
import {Link} from "react-router-dom";
import '../assets/styles/Header.css'

const Header = () => {
    return (
        <AppBar position="static" className="app-bar" style={{backgroundColor: "#232f3e"}}>
            <Toolbar className="toolbar">
                <div style={{width: "10%", display: "flex", alignItems: "center"}}>
                    <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                        <Logo className="logo"/>
                    </Link>
                </div>
                <Typography variant="h3" component="div" sx={{flexGrow: 1, marginLeft: 2}}>
                    <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                        My React App
                    </Link>
                </Typography>
                <Button variant="h2" color="inherit" component={Link} to="/login">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

