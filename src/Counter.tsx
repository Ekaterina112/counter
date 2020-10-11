import React from 'react';
import But from './But';
import {Box, createStyles, Paper, Theme} from '@material-ui/core';
import s from './Counter.module.css'
import {makeStyles} from '@material-ui/core/styles';

export type CounterType = {
    counter: number
    add: () => void
    reset: () => void
    disabled?: boolean
    minValue: number
    maxValue: number
    error: String
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

function Counter(props: CounterType) {
    const classes = useStyles();
    function handlerError() {
        switch (props.error) {
            case 'incorrect' :
                return 'incorrect value'
            case 'tabSet':
                return 'press \'set\''
            case 'enter value':
                return 'enter value'
            default:
                return props.counter
        }
    }

    return (
        <Paper elevation={3}
        square={false}
        >
            <div className={`${props.counter == props.maxValue ? s.maximum : s.usual} ${s.flex}`} >
                {handlerError()}
            </div>
            <div className={classes.root}>
                <But
                    title="add"
                    click={props.add}
                    maxValue={props.maxValue}
                    minValue={props.minValue}
                    disabled={props.error!=="work"}

                />
                <But
                    title="reset"
                    click={props.reset}
                    maxValue={props.maxValue}
                    minValue={props.minValue}
                    disabled={props.error!=="work"}
                />
            </div>

        </Paper>
    );
}

export default Counter;
