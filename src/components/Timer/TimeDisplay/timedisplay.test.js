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
});
