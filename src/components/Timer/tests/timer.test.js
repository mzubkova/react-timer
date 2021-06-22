import React from "react";
import { shallow, mount } from "enzyme";
import Timer from "..";
import TimeDisplay from "../Timer";

describe("Timer", () => {
  it("Should match shapshot", () => {
    const component = shallow(<Timer />);
    expect(component.html()).toMatchSnapshot();
  });
  it("Should have Timer", () => {
    const component = mount(<Timer />);
    expect(component.find("Timer")).toHaveLength(1);
  });
  it("Should have div", () => {
    const component = mount(<Timer />);
    expect(component.find("div")).toHaveLength(3);
  });
  it("Should have label", () => {
    const component = mount(<Timer />);
    expect(component.find("label")).toHaveLength(1);
  });
  it("Should have input", () => {
    const component = mount(<Timer />);
    expect(component.find("input")).toHaveLength(1);
  });
  it("Should have button", () => {
    const component = mount(<Timer />);
    expect(component.find("button")).toHaveLength(3);
  });
  it("Should have TimeDisplay", () => {
    const component = mount(<TimeDisplay />);
    expect(component.find("TimeDisplay")).toHaveLength(1);
  });
});
