import * as React from 'react';
import { render } from 'react-dom';

import Touchpad from './components/Touchpad';
import ResultBoard from './components/ResultBoard';

import { preventInvalidInput, handleSymbolsSwap } from './helpers';

interface IProps {}

interface IState {
    result: string
}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            result: ''
        }
    }

    handleChosenValueClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const chosenValue = e.target.value;

        this.setState(currentState => {
            return {
                result: currentState.result + chosenValue 
            }
        })
    }

    handleCalculateResult = (result: string) => {
        // Prevent app crash from invalid single input
        if (preventInvalidInput(result)) { return; }
        
        // Replacing symbols '²' and '√' with JavaScript math functions
        if (result.indexOf('²') > -1) {
            result = handleSymbolsSwap(result, '²');
        } else if (result.indexOf('√') > -1) {
            result = handleSymbolsSwap(result, '√');
        }

        // Checking operation symbols (inluding percentage and change them)
        result = handleSymbolsSwap(result, '%');
        result = handleSymbolsSwap(result, 'x');
        result = handleSymbolsSwap(result, '÷');

        // Calculate result and setting state
        const calculatedResult = eval(result);
        this.setState({ result: calculatedResult })
    }

    handleUndoLastInput = () => {
        this.setState(currentState => {
            return {
                result: currentState.result.slice(0, -1)
            }
        })
    }

    handleClearInput = () => {
        this.setState({ result: '' })
    }

    handlePowerOf2 = () => {
        this.setState(currentState => {
            return { result: currentState.result + '²' }
        })
    }

    render() {
        return (
            <div>
                <h1>React Calculator</h1>
                <ResultBoard result={this.state.result} />
                <Touchpad 
                    onChosenValueClick={this.handleChosenValueClick} 
                    onCalculateResultClick={this.handleCalculateResult}
                    onUndo={this.handleUndoLastInput}
                    onClear={this.handleClearInput}
                    onPowerOf2={this.handlePowerOf2}
                    result={this.state.result}
                />
            </div>
        );
    }
};
export default App;

render(<App />, document.getElementById('root'));