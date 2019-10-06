import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'; 

configure({ adapter: new Adapter() });

describe('handleChosenValueClick', () => {
  it('should update result board with the value from the button input', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    const mockedEvent = { target: { value: '5' } };
    instance.handleChosenValueClick(mockedEvent);
    expect(wrapper.state('result')).toBe('5');
  });
});

describe('handleCalculateResult', () => {
  it('should update board with the result from the operation', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    
    expect(wrapper.state('result')).toBe('');
    instance.handleCalculateResult('5+2²');
    expect(wrapper.state('result')).toBe(9);
  });
});

describe('handleUndoLastInput', () => {
  it('it should remove last input element from the board', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    instance.setState({result: '1+5'});
    instance.handleUndoLastInput();
    expect(wrapper.state('result')).toBe('1+');
  });
});

describe('handleUndoLastInput', () => {
  it('it should remove all elements from the board', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    instance.setState({ result: '√9+3-8' });
    instance.handleClearInput();
    expect(wrapper.state('result')).toBe('');
  });
});

describe('handlePowerOf2', () => {
  it('it should add "²" to last element of current board', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    instance.setState({ result: '7' });
    instance.handlePowerOf2();
    expect(wrapper.state('result')).toBe('7²');
  });
});
