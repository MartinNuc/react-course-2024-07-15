import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./use-counter";

describe('useCounter', () => {

  it('initializes with a initial value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it('increments the value', () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => result.current.increment());
    expect(result.current.count).toBe(11);
  });

  it('randomizes the value', () => {
    const { result } = renderHook(() => useCounter(10));
    const randomMock = jest.spyOn(Math, 'random');
    randomMock.mockReturnValue(1);

    act(() => result.current.randomize());
    expect(result.current.count).toBe(1);
  });
});
