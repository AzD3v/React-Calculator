import * as React from 'react';
import { render } from 'react-dom';
import Touchpad from './components/Touchpad';
import ResultBoard from './components/ResultBoard';

interface IProps {}

interface IState {
    result: string
}

class App extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        }
    }

    handleSymbolsSwap = (result: string, symbol: string) => {

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
        // TODO: Check for 'to power of 2' symbol and replace it with Math.power (for every occurence)
        if (result.indexOf('²') > -1) {
            const elemElevatedToPowerOf2 = result[result.indexOf('²') - 1];
            result = result.replace(
                elemElevatedToPowerOf2, 
                `Math.pow(${elemElevatedToPowerOf2}, 2)`
            );
            result = result.replace('²', '');
        }

        // TODO: Check square root on expressions
        if (result.indexOf('√') > -1) {
            const elemToFindSquareRoot = result[result.indexOf('√') + 1];
            result = result.replace('√', `Math.sqrt(${elemToFindSquareRoot}`);
            result = result.replace(result[result.indexOf('r') + 4], '');
            result += ')';
            console.log(result)
        }

        // Check for percantage symbol
        if (result.indexOf('%') > -1) {
            result = result.replace('%', '/100');
        }

        // Replace 'times' symbol
        result = result.replace('x', '*');

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

    // handleSquareRoot = (): void => {
    //     this.setState(currentState => {
    //         return { result: '√' + currentState.result }
    //     })
    // }

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
                    // ={this.handleSquareRoot}
                    result={this.state.result}
                />
            </div>
        );
    }
};
export default App;

render(<App />, document.getElementById('root'));