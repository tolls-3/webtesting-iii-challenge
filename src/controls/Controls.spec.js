// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(rtl.cleanup);

describe("Controls Components", () => {
  it("matches the snapshot!", () => {
    const wrapper = rtl.render(<Controls />);
    expect(wrapper.container).toMatchSnapshot();
  });

  it("buttons text changes when state of door is changed", () => {
    const wrapper = rtl.render(<Controls />);
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
  });

  it('open toggle button is disabled if gate is locked', () => {
    const wrapper = rtl.render(<Controls locked={true} closed={true} />);
    expect(wrapper.queryByText(/open gate/i)).toBeDisabled();
  });

  it('locked toggle button is disabled if gate is open', () => {
    const wrapper = rtl.render(<Controls locked={false} closed={false} />);
    expect(wrapper.queryByText(/lock gate/i)).toBeDisabled();
  });
});
