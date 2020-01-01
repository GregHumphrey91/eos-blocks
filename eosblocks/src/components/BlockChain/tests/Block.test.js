import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, cleanup, waitForElement } from "@testing-library/react";

import axios from "axios";
import Home from "../../Routes/Home";

jest.mock("axios");

import blocks from "./mockBlocks";

configure({ adapter: new Adapter() });

describe("Test suite", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Renders home component", async done => {
    axios.get.mockResolvedValueOnce({
      data: { blocks: "data" }
    });
    wrapper.update();
    const component = wrapper.find("h1").text();
    expect(component).toContain("Recent Blocks");
    console.log(wrapper.debug());

    done();
  }); // End of test
}); // End of suite
