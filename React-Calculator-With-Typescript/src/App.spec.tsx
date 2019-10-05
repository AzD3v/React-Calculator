import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './App'; 

configure({ adapter: new Adapter() });

describe('directly invoking the "handleChosenValueClick" method from App component', () => {
  it("should update result board with the value from the button input", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(wrapper.state("result")).toBe('');
    instance.handleCalculateResult('5');
    expect(wrapper.state("result")).toBe(5);
  });
});