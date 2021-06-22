import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../Header";

describe("Header", () => {
  it("Should match shapshot", () => {
    const component = shallow(<Header />);
    expect(component.html()).toMatchSnapshot();
  });
  it("Should have Header", () => {
    const component = mount(<Header />);
    expect(component.find("Header")).toHaveLength(1);
  });
  it("Should have div", () => {
    const component = mount(<Header />);
    expect(component.find("div")).toHaveLength(1);
  });
  it("Should have ButtonTheme", () => {
    const component = mount(<Header />);
    expect(component.find("ButtonTheme")).toHaveLength(1);
  });
});
