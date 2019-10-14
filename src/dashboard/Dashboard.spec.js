// Test away
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

describe("Display Components", () => {
  const wrapper = rtl.render(<Dashboard />);
  it("matches the snapshot!", () => {
    expect(wrapper.container).toMatchSnapshot();
  });

  it("should render controls & display", () => {
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
  });
});
