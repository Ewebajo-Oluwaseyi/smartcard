import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, CssBaseline } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop:10,        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const Content = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item xs={12}>

                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>

          
                    </Grid>
                    <Grid item xs={6}>
                        
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>
                       
                    </Grid>
                    <Grid item xs={6}>
                       
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>
                            <Typography>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi corporis velit. At vel odio, quisquam commodi sunt architecto soluta natus recusandae perspiciatis omnis reprehenderit totam eaque quibusdam corporis ad!
                            </Typography>

                        
                    </Grid>

                </Grid>
            </Container>

        </div>
    )
}