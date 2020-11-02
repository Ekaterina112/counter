import React, {useState} from 'react';
import './App.css';
import Counter from './Counter/Counter';
import Settings from './SettingWindows/SettingsWindow';


export type StateType = {
    maxValue: number
    minValue: number
}

function App() {

    function saveState<StateType>(key: string, state: StateType) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<StateType>(key: string, defaultState: StateType) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as StateType;
        return defaultState;
    }

    const state: StateType = restoreState<StateType>('savedValues', {maxValue: 10, minValue: 0});

    let [minValue, setMinValue] = useState<number>(state.minValue)
    let [maxValue, setMaxValue] = useState<number>(state.maxValue)
    let [counter, setCounter] = useState<number>(state.minValue)
    let [error, setError] = useState<string>('work')


    function add() {
        setCounter(counter + 1)
    }

    function reset() {
        setCounter(state.minValue)
    }

    function settingValues(state: StateType) {
        setMaxValue(state.maxValue)
        setCounter(state.minValue)
        setMinValue(state.minValue)
    }

    return (<div className={'wrapper'}>
            <Settings
                minValue={state.minValue}
                maxValue={state.maxValue}
                saveState={saveState}
                settingValues={settingValues}
                error={error}
                setError={setError}
            />
            <Counter
                minValue={minValue}
                maxValue={maxValue}
                counter={counter}
                add={add}
                reset={reset}
                error={error}
            />
        </div>


    );
}

export default App;
