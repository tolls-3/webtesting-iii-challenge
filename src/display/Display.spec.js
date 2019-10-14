// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

describe("Display Components", () => {
  const wrapper = rtl.render(<Display />);
  it("matches the snapshot!", () => {
    expect(wrapper.container).toMatchSnapshot();
  });

  it("Displays if gate is open", () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/closed/i)).not.toBeInTheDocument();
  });

  it("Displays if gate is closed", () => {
    const wrapper = rtl.render(<Display closed={true} />);
    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/open/i)).not.toBeInTheDocument();
  });

  it("Displays if gate is unlocked", () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
  });

  it("Displays if gate is locked", () => {
    const wrapper = rtl.render(<Display locked={true} />);
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/unlocked/i)).not.toBeInTheDocument();
  });

  it("Displays red-led when locked/closed", () => {
    const wrapper = rtl.render(<Display locked={true} closed={true} />);
    expect(wrapper.getByText('Locked')).toHaveClass('red-led')
    expect(wrapper.getByText('Closed')).toHaveClass('red-led')
  });

  it("Displays green-led when unlocked/open", () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.getByText('Unlocked')).toHaveClass('green-led')
    expect(wrapper.getByText('Open')).toHaveClass('green-led')
  });

});
