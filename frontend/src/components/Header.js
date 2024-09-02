//src/component/Header.js
import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Logo} from "./common/Icons";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <div style={{width: "10%", display: "flex", alignItems: "center"}}>
                    <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                        <Logo style={{width: "100%", height: "auto"}}/>
                    </Link>
                </div>
                <Typography variant="h3" component="div" sx={{flexGrow: 1, marginLeft: 2}}>
                    <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                        My React App
                    </Link>
                </Typography>
                <Button variant={"h2"} color="inherit" component={Link} to="/login">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;