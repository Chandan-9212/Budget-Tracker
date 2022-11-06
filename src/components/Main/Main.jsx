import React from 'react'
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import List from "./List/List";
import Form from "./Form/Form";
import useStyles from './styles';
function Main() {
    const classes=useStyles();
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subHeader="Powered by speechly" />
        <CardContent>
            <Typography align="center" variant="h5">Total Balance $100</Typography>
            <Typography align="subtitle1" style={{lineHeight:'1.5em',marginTop:'20px'}}>{ }</Typography>
            <Divider/>
            <Form/>
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>
                </Grid>
                </CardContent> 
    </Card>
  )
}

export default Main