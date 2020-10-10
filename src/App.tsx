import React, {useState} from 'react';
import s from './SettingWindow.module.css';
import Counter from './Counter';
import Settings from './SettingsWindow';


function App() {

    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [counter, setCounter] = useState<number>(minValue)

    function add() {
        setCounter(counter + 1)
    }

    function reset() {
        setCounter(minValue)
    }
    function settingValues(maxValue:number, minValue:number) {
        setMaxValue(maxValue)
        setCounter(minValue)
        setMinValue(minValue)
    }

    return (<div className={s.flex}>

            <Settings settingValues={settingValues} />
            <Counter
                counter={counter}
                add={add}
                reset={reset}
                minValue={minValue}
                maxValue={maxValue}
            />
        </div>
    );
}

export default App;
