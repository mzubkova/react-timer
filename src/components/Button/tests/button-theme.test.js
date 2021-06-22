import React from "react";
import { shallow, mount } from "enzyme";
import ButtonTheme from "../ButtonTheme";

describe("ButtonTheme", () => {
  it("Should match shapshot", () => {
    const component = shallow(<ButtonTheme />);
    expect(component.html()).toMatchSnapshot();
  });
  it("Should have Button", () => {
    const component = mount(<ButtonTheme />);
    expect(component.find("ButtonTheme")).toHaveLength(1);
  });
  it("Should have button", () => {
    const component = mount(<ButtonTheme />);
    expect(component.find("button")).toHaveLength(1);
  });
});
