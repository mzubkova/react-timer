import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import Timer from "../App";

describe("App", () => {
  it("Should match shapshot", () => {
    const component = shallow(<App />);
    expect(component.html()).toMatchSnapshot();
  });
  it("Should have Header", () => {
    const component = mount(<App />);
    expect(component.find("Header")).toHaveLength(1);
  });
  it("Should have Timer", () => {
    const component = mount(<App />);
    expect(component.find("Timer")).toHaveLength(1);
  });
});
