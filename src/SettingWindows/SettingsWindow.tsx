import React, {ChangeEvent, useState} from 'react';
import s from './SettingWindow.module.css'
import But from '../Button/But';
import { Paper, TextField} from '@material-ui/core';
import {StateType} from '../App';


export type SettingsType = {
    maxValue:number
    minValue:number
    settingValues: (state:StateType) => void
    saveState: (key:string, state:StateType) => void
    error:string
    setError:(error:string)=>void
}


function Settings(props: SettingsType) {
//delete here states!!!
    let [minValue, setMinValue] = useState<number>(props.minValue)
    let [maxValue, setMaxValue] = useState<number>(props.maxValue)

    function checkValue(maxValue: number, minValue: number, oldMaxValue: number, oldMinValue: number) {
        if (maxValue <= minValue || maxValue > 10 || minValue < 0 ) {
            props.setError('incorrect value')
        } else if (isNaN(minValue) || isNaN(maxValue)) {
            props.setError('enter value')
        } else if (oldMaxValue != maxValue || oldMinValue != minValue) {
           props.setError('press \'set\'')
        } else {
            props.setError('work')
        }
    }

    const onChangeForMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number.parseInt(e.currentTarget.value)
        checkValue(newValue,minValue,maxValue,minValue)
        setMaxValue(newValue)
    }
    const onChangeForMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number.parseInt(e.currentTarget.value)
        checkValue(maxValue,newValue,maxValue,minValue)
        setMinValue(newValue)
    }

    let setCallback = () => {
        props.settingValues({maxValue,minValue})
        checkValue(maxValue,minValue,maxValue,minValue)
        props.saveState('savedValues', {maxValue,minValue})
    }

    return (
        <div className={s.counter}>
        <Paper  style={{
            backgroundColor: "#dceef8"
        }}
            elevation={24}
            square={false}
       >
            <div  className={s.screen}>
                <div>
                <TextField
                    style={{
                        fontFamily: 'inherit',
                        color: '#ae5c6a',
                        borderColor: "#ae5c6a"
                    }}
                    id="outlined-password-input"
                    label="Max value"
                    type="number"
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={onChangeForMaxValue}
                    defaultValue={props.maxValue}
                    error={props.maxValue <= props.minValue || props.maxValue > 10 || isNaN(props.maxValue)}
                />
                </div>
                <div>
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
                    error={props.maxValue <= props.minValue || props.minValue < 0 || isNaN(props.minValue)}
                    />
                </div>
            </div>
            <div className={s.buttons}>
                <But disabled={props.error!=="work" && props.error!=='press \'set\''}
                     title={'set'}
                     click={setCallback}/>
            </div>
        </Paper>
            </div>
    );
}

export default Settings;