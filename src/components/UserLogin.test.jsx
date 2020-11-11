import * as React from "react";
import { UserLogin } from "./UserLogin";
import { fireEvent, render } from "@testing-library/react";
import * as useLoginApiModule from "../hooks/useLoginApi";

describe("UserLogin", () => {
  const makeApiCallMock = jest.fn();

  beforeAll(() => {
    jest.spyOn(useLoginApiModule, "useLoginApi").mockReturnValue({
      responseStatus: 200,
      makeApiCall: makeApiCallMock
    })
  });
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders successfully", () => {
    const url = "https://something.abcd.efgghfsa";

    const { container, getByText } = render(<UserLogin url={url} />);

    expect(container).toBeDefined();
    expect(getByText(url)).toBeDefined();
    expect(container).toMatchSnapshot();
  });

  it("on click sends login request to URL passed as prop", () => {
    const url = "https://something.abcd.efgghfsa";

    const { container, getByRole, getByText } = render(<UserLogin url={url} />);

    expect(container).toBeDefined();
    expect(getByText(url)).toBeDefined();
    expect(makeApiCallMock).not.toHaveBeenCalled();

    const button = getByRole("button");
    expect(button).toBeDefined();

    fireEvent.click(button);

    expect(getByText("200")).toBeDefined();
    expect(makeApiCallMock).toHaveBeenCalledTimes(1);
  })
});
