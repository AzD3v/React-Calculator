import * as React from 'react';
import Button from './Button'

const touchpadStyle = {
    height: '200px',
    width: '400px',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    margin: '0',
    position: 'absolute',
    top: '35.6%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

type Touchpad = {
    value: string;
    label: string;
    result: string;
    onChosenValueClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    onUndo(): void;
    onClear(): void;
    onPowerOf2(): void;
    onCalculateResultClick(result: string): void; 
}

const Touchpad = (props: Touchpad) => {
    return (
        <div style={touchpadStyle}>
            <Button onClickButton={props.onChosenValueClick} value='7' label='7'></Button>
            <Button onClickButton={props.onChosenValueClick} value='8' label='8'></Button>
            <Button onClickButton={props.onChosenValueClick} value='9' label='9'></Button>
            <Button onClickButton={props.onChosenValueClick} value='/' label='÷'></Button>
            <Button onClickButton={props.onUndo} label='⏎' value=''></Button>
            <Button onClickButton={props.onClear} label='C' value=''></Button>
            <Button onClickButton={props.onChosenValueClick} value='4' label='4'></Button>
            <Button onClickButton={props.onChosenValueClick} value='5' label='5'></Button>
            <Button onClickButton={props.onChosenValueClick} value='6' label='6'></Button>
            <Button onClickButton={props.onChosenValueClick} value='x' label='x'></Button>
            <Button onClickButton={props.onChosenValueClick} value='(' label='('></Button>
            <Button onClickButton={props.onChosenValueClick} value=')' label=')'></Button>
            <Button onClickButton={props.onChosenValueClick} value='1' label='1'></Button>
            <Button onClickButton={props.onChosenValueClick} value='2' label='2'></Button>
            <Button onClickButton={props.onChosenValueClick} value='3' label='3'></Button>
            <Button onClickButton={props.onChosenValueClick} value='-' label='-'></Button>
            <Button onClickButton={props.onPowerOf2} value='' label='x²'></Button>
            <Button onClickButton={props.onChosenValueClick} value='√' label='√'></Button>
            <Button onClickButton={props.onChosenValueClick} value='0' label='0'></Button>
            <Button onClickButton={props.onChosenValueClick} value='.' label='.'></Button>
            <Button onClickButton={props.onChosenValueClick} value='%' label='%'></Button>
            <Button onClickButton={props.onChosenValueClick} value='+' label='+'></Button>
            <Button 
                onClickButton={() => props.onCalculateResultClick(props.result)} 
                value='' 
                label='='>
            </Button>
        </div>
    )
}

export default Touchpad;