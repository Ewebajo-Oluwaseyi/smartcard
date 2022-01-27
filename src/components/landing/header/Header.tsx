import React from 'react'
import { AppBar, Toolbar,  Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#673ab7' }}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        {'SmartHealth-Records'}
                    </Typography>
                    
                    <Button color="inherit" href="/login">
                      Login
                    </Button>
                    <Button color="inherit" href="/sign-up">
                      Sign-In 
                    </Button>
                </Toolbar>
            </AppBar>            
        </div>
    )
}
