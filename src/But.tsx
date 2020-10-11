import React from 'react';
import './App.css';
import {Box, Button, createStyles, Theme} from '@material-ui/core';
import classes from './But.module.css'
import {makeStyles} from '@material-ui/core/styles';

export type ButType = {
    click: () => void
    disabled: boolean
    maxValue ?: number
    minValue ?: number
    title: string
}



function But(props: ButType) {


    return (<Button
                variant="outlined" size="small"
                onClick={props.click}
                disabled={props.disabled}
            >
                {props.title} </Button>


    );
}

export default But;
