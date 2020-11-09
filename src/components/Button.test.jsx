import * as React from "react";
import { Button } from "./Button";
import { fireEvent, render } from "@testing-library/react";

describe("Button", () => {
  it("renders successfully", () => {
    const buttonLabel = "Button label";

    const { container, getByRole, getByText } = render(<Button>{buttonLabel}</Button>);

    expect(container).toBeDefined();

    expect(getByRole("button")).toBeDefined();
    expect(getByText(buttonLabel)).toBeDefined();
  });

  it("matches snapshot", () => {
    const { container } = render(<Button>Button label</Button>);

    expect(container).toMatchSnapshot();
  });

  it("on click calls onClick function passed as argument", () => {
    const onClickSpy = jest.fn();
    const { getByRole } = render(<Button onClick={onClickSpy} />);

    const button = getByRole("button")
    expect(button).toBeDefined();

    expect(onClickSpy).not.toBeCalled();

    fireEvent.click(button);

    expect(onClickSpy).toBeCalled();
  })
});
