import { useArray } from "./useArray";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useArray", () => {
  it("returns empty array if initial array is not passed", () => {
    const { result } = renderHook((props) => useArray(props), {
      initialProps: undefined
    })

    expect(result.current.array).toBeDefined();
    expect(result.current.array).toHaveLength(0);
  });

  it("returns initial array passed as prop", () => {
    const initialArray = [5, 7];
    const { result } = renderHook((props) => useArray(props), {
      initialProps: initialArray
    })

    expect(result.current.array).toBeDefined();
    expect(result.current.array).toHaveLength(initialArray.length);

    expect(result.current.array).toEqual(initialArray);

    // note that usually we should use toEqual instead of toBe because
    // they may be equal but with different references
    expect(result.current.array).not.toBe([...initialArray])
    expect(result.current.array).toEqual([...initialArray])
  });

  it("when initial array prop changes, it persists array passed earlier as prop", () => {
    const initialArray = ["jeden", "trzy"];
    const nextArray = ["piec", "sto"];

    const { result, rerender } = renderHook((props) => useArray(props), {
      initialProps: initialArray
    })

    expect(result.current.array).toEqual(initialArray);

    rerender(nextArray);

    expect(result.current.array).not.toEqual(nextArray);
    expect(result.current.array).toEqual(initialArray);
  });

  it("returns appendItem function which appends item to array", () => {
    const initialArray = [3, 5];
    const appendItem = 7;

    const { result } = renderHook((props) => useArray(props), {
      initialProps: initialArray
    })

    expect(result.current.array).toEqual(initialArray);

    // we need to wrap result.current.appendItem call in act as it updates React state
    act(() => result.current.appendItem(appendItem));

    // please note that we don't have to rerender hook and we're still using result.current
    // it's because current value is mutable
    expect(result.current.array).toEqual([...initialArray, appendItem]);
  });

  it("returns prependItem function which prepends item to array", () => {
    const initialArray = [3, 5];
    const prependItem = 7;

    const { result } = renderHook((props) => useArray(props), {
      initialProps: initialArray
    })

    expect(result.current.array).toEqual(initialArray);

    // we need to wrap result.current.appendItem call in act as it updates React state
    act(() => result.current.prependItem(prependItem));

    // please note that we don't have to rerender hook and we're still using result.current
    // it's because current value is mutable
    expect(result.current.array).toEqual([prependItem, ...initialArray]);
  });

  it("returns removeItem function which removes item from array", () => {
    const removeItem = 7;
    const initialArray = [removeItem, 5, removeItem, 9];

    const { result } = renderHook((props) => useArray(props), {
      initialProps: initialArray
    })

    expect(result.current.array).toEqual(initialArray);

    // we need to wrap result.current.appendItem call in act as it updates React state
    act(() => result.current.removeItem(removeItem));

    // please note that we don't have to rerender hook and we're still using result.current
    // it's because current value is mutable
    expect(result.current.array).toEqual([5, 9]);
  });
});
