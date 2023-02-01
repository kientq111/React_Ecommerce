import React from "react";
import Typography from '@mui/material/Typography';
import { Link } from "@mui/material";
export const Footer = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" style={{marginTop:40}}>
            {'Copyright © '}
            <Link color="inherit" href="#">
              KenCan'tCode
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}