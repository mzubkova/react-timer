import React from "react";
import { shallow, mount } from "enzyme";
import TimeDisplay from "../TimeDisplay";

describe("TimeDisplay", () => {
  it("Should match shapshot", () => {
    const component = shallow(<TimeDisplay />);
    expect(component.html()).toMatchSnapshot();
  });
  it("Should have TimeDisplay", () => {
    const component = mount(<TimeDisplay />);
    expect(component.find("TimeDisplay")).toHaveLength(1);
  });
  it("Should have h1", () => {
    const component = mount(<TimeDisplay />);
    expect(component.find("h1")).toHaveLength(1);
  });
  it("Should have div", () => {
    const component = mount(<TimeDisplay />);
    expect(component.find("div")).toHaveLength(1);
  });
});
