import React, {ChangeEvent, useState} from 'react';
import s from './SettingWindow.module.css'
import But from './But';
import {Paper, TextField} from '@material-ui/core';

export type SettingsType = {
    settingValues: (maxValue: number, minValue: number) => void
}


function Settings(props: SettingsType) {

    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)

    const onChangeForMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number.parseInt(e.currentTarget.value)
        setMaxValue(newValue)

    }
    const onChangeForMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number.parseInt(e.currentTarget.value)
        setMinValue(newValue)
    }

    let setCallback = () => {
        props.settingValues(maxValue, minValue)
        localStorage.setItem("maxValue", String(maxValue))
        localStorage.setItem("minValue", String(minValue))
    }
    return (
        <Paper
            elevation={3}/*className={props.counter === props.maxValue || props.counter === props.minValue ? s.counterTwo:s.counter}*/>
            <div>
                <TextField
                    id="outlined-password-input"
                    label="max value"
                    type="number"
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onChangeForMaxValue}/>
            </div>
            <div>
                <TextField
                    id="outlined-password-input"
                    label="start value"
                    type="number"
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onChangeForMinValue}/>
            </div>
            <div className={s.align}>
                <But disabled={maxValue <= minValue} title={'set'} click={setCallback}/>
            </div>
        </Paper>
    );
}

export default Settings;