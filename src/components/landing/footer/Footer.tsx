import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {  Typography, Container, CssBaseline } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop:10,        
    },

}));

export const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
           <CssBaseline/>
           <Container fixed>
               <Typography component="div">
                   PrimedHealth
               </Typography>
            </Container>         
        </div>
    )
}
