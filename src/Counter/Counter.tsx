import React from 'react';
import But from '../Button/But';
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
      <div className={s.counter}>
        <Paper elevation={24}
        square={false}
               style={{
                   backgroundColor: "#dceef8"
               }}
        >
            <div className={`${props.counter == props.maxValue ? s.maximum : s.usual} ${s.screen}`} >
                {handlerError()}
            </div>
            <div className={s.buttons}>
                <But
                    title="add"
                    click={props.add}
                    maxValue={props.maxValue}
                    minValue={props.minValue}
                    disabled={props.error!=="work"  || props.counter == props.maxValue}
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
    </div>
    );
}

export default Counter;
