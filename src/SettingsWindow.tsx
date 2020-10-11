import React, {ChangeEvent, useState} from 'react';
import s from './SettingWindow.module.css'
import But from './But';
import {Paper, TextField} from '@material-ui/core';
import {StateType} from './App';

export type SettingsType = {
    maxValue:number
    minValue:number
    settingValues: (state:StateType) => void
    saveState: (key:string, state:StateType) => void
    checkValue:(maxValue:number, minValue:number,oldMaxValue:number,oldMinValue:number)=>void
    error:string
}


function Settings(props: SettingsType) {

    let [minValue, setMinValue] = useState<number>(props.minValue)
    let [maxValue, setMaxValue] = useState<number>(props.maxValue)

    const onChangeForMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number.parseInt(e.currentTarget.value)
        props.checkValue(newValue,minValue,maxValue,minValue)
        setMaxValue(newValue)

    }
    const onChangeForMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number.parseInt(e.currentTarget.value)
        props.checkValue(maxValue,newValue,maxValue,minValue)
        setMinValue(newValue)
    }

    let setCallback = () => {
        props.settingValues({maxValue,minValue})
        props.checkValue(maxValue,minValue,maxValue,minValue)
        props.saveState('savedValues', {maxValue,minValue})
    }

    return (
        <Paper
            elevation={3}
            square={false}
       >
            <div  className={s.screen}>
                <TextField
                    id="outlined-password-input"
                    label="Max value"
                    type="number"
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onChangeForMaxValue}
                    defaultValue={props.maxValue}
                    error={maxValue < minValue || maxValue > 10 || isNaN(maxValue)}
                />
                <TextField
                    id="outlined-password-input"
                    label="Start value"
                    type="number"
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onChangeForMinValue}
                    defaultValue={props.minValue}
                    error={maxValue < minValue || minValue < 0 || isNaN(minValue)}
                    />
            </div>
            <div>
                <But disabled={maxValue <= minValue} title={'set'} click={setCallback}/>
            </div>
        </Paper>
    );
}

export default Settings;