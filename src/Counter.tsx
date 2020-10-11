import React from 'react';
import But from './But';
import {Paper} from '@material-ui/core';
import s from './Counter.module.css'

export type CounterType = {
    counter: number
    add: () => void
    reset: () => void
    disabled?: boolean
    minValue: number
    maxValue: number
    error: String
}


function Counter(props: CounterType) {
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
            <div className={props.counter == props.maxValue ? s.maximum : s.usual} >
                {handlerError()}
            </div>
            <div>
                <But
                    title="add"
                    click={props.add}
                    maxValue={props.maxValue}
                    minValue={props.minValue}
                    disabled={props.counter === props.maxValue || props.maxValue === props.minValue}

                />
                <But
                    title="reset"
                    click={props.reset}
                    maxValue={props.maxValue}
                    minValue={props.minValue}
                    disabled={props.counter === props.minValue || props.maxValue === props.minValue}
                />
            </div>
        </Paper>
    );
}

export default Counter;
