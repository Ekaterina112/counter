import React from 'react';
import But from './But';
import { Paper} from '@material-ui/core';



export type CounterType = {
    counter: number
    add: () => void
    reset: () => void
    disabled?: boolean
    minValue: number
    maxValue: number
}


function Counter(props: CounterType) {
    return (
        <Paper elevation={3} /*className={props.counter === props.maxValue || props.counter === props.minValue ? s.counterTwo:s.counter}*/>
            <div>{props.counter}</div>
            <div>

                <But
                     click={props.add}
                     maxValue={props.maxValue}
                     minValue={props.minValue}
                     disabled={props.counter === props.maxValue || props.maxValue===props.minValue}
                     title="add"/>
                <But
                     click={props.reset}
                     maxValue={props.maxValue}
                     minValue={props.minValue}
                     disabled={props.counter === props.minValue || props.maxValue===props.minValue}
                     title="reset"/>
            </div>
        </Paper>
    );
}

export default Counter;
