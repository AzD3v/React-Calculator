import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { preventInvalidInput, handleSymbolsSwap } from './helpers';

configure({ adapter: new Adapter() });

describe('preventInvalidInput', () => {
  it('should return true when single input is a symbol', () => {
    expect(preventInvalidInput('√')).toBe(true);
  });

  it('should return false when single input is a number', () => {
    expect(preventInvalidInput('15')).toBe(false);
  });
});

describe('handleSymbolsSwap', () => {
  it('should return result value with "Math.pow(num, 2)" instead of "²" symbol', 
  () => {
    const initialState = { result: '3²' }
    const resultAfterSwap = handleSymbolsSwap(initialState.result, '²');
    expect(resultAfterSwap).toBe('Math.pow(3, 2)');
  });

  it('should return result value with "Math.sqrt(num)" instead of "√" symbol', () => {
    const initialState = { result: '√9' }
    const resultAfterSwap = handleSymbolsSwap(initialState.result, '√');
    expect(resultAfterSwap).toBe('Math.sqrt(9)');
  });

  it('should return result value with percentage calculation instead of "%" symbol', () => {
    const initialState = { result: '20%' }
    const resultAfterSwap = handleSymbolsSwap(initialState.result, '%');
    expect(resultAfterSwap).toBe('20/100');
  });

  it('should return result value with percentage calculation instead of "%" symbol', () => {
    const initialState = { result: "3x9" };
    const resultAfterSwap = handleSymbolsSwap(initialState.result, "x");
    expect(resultAfterSwap).toBe("3*9");
  });

  it('should return result value with percentage calculation instead of "%" symbol', () => {
    const initialState = { result: "12÷3" };
    const resultAfterSwap = handleSymbolsSwap(initialState.result, "÷");
    expect(resultAfterSwap).toBe("12/3");
  });
});