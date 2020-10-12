import React from 'react';
import {Button} from '@material-ui/core';


export type ButType = {
    click: () => void
    disabled: boolean
    maxValue?: number
    minValue?: number
    title: string
}


function But(props: ButType) {

    return (
            <Button
                style={{
                    fontFamily: 'inherit',
                    color: '#ae5c6a',
                    borderColor: "#ae5c6a"
                }}
                variant="outlined"
                size="small"
                onClick={props.click}
                disabled={props.disabled}
            >
                {props.title} </Button>
    );
}

export default But;
