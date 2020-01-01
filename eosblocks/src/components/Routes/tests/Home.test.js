import React from "react";
import Home from "../Home";
import
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Home component test suite", () => {
  let shallowWrapper;
  beforeAll(() => {
    shallowWrapper = shallow(<Home />);
  });

  it("The home component shallow renders", done => {
    const text = shallowWrapper.find("h1").text();
    expect(text).toContain("Recent Blocks");
    done();
  });

  let mountedWrapper = mount(<Home />);
  it("The home component mounts", done => {
    console.log(mountedWrapper.debug());
  expect(mountedWrapper).toBeDefined();

    done();
  });
});
