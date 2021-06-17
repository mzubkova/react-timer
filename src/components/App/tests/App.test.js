import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import Timer from "../App";

describe("App", () => {
  it("Should match shapshot", () => {
    const component = shallow(<App />);
    expect(component.html()).toMatchSnapshot();
  });
  it("Should have ToDo", () => {
    const component = mount(<App />);
    expect(component.find("Timer")).toHaveLength(1);
  });
});
