import React from 'react';
import './App.css';
import {Button} from '@material-ui/core';
import s from './Counter.module.css'

export type ButType = {
    click: () => void
    disabled: boolean
    maxValue ?: number
    minValue ?: number
    title: string
}

function But(props: ButType) {
    return (<Button variant="outlined" size="small"
                    onClick={props.click}
                    disabled={props.disabled}
                    className={s.but}
        >
            {props.title} </Button>
    );
}

export default But;
