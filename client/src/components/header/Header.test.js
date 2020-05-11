import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "./../../../utils";

import Header from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);

  return component;
};
console.log("com", setUp());
describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  console.log("h", Header);
  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });
});
