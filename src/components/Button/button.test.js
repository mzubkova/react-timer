import React from "react";
import { shallow, mount } from "enzyme";
import Button from "../Button";

describe("Button", () => {
  it("Should match shapshot", () => {
    const component = shallow(<Button />);
    expect(component.html()).toMatchSnapshot();
  });
  it("Should have Button", () => {
    const component = mount(<Button />);
    expect(component.find("Button")).toHaveLength(1);
  });
  it("Should have button", () => {
    const component = mount(<Button />);
    expect(component.find("button")).toHaveLength(1);
  });
});
