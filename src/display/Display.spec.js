import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

// Test away!

test('Display SnapShot', () => {
    expect(render(<Display/>)).toMatchSnapshot();
})

test('Display is rendering', () => {
    render(<Display/>)
})

test('if Unlocked is false', () => {
    const { getByText } = render(<Display locked={false} />);
    expect(getByText(/Unlocked/i));
  });

test('if locked is true', () => {
    const { queryByText } = render(<Display locked={false} />);
    expect(queryByText(/^Locked/i)).toBeFalsy();
  });

test('if Close is true', () => {
    const { getByText } = render(<Display closed={true} />);
    expect(getByText(/Closed/i));
});

test('if Open is false', () => {
    const { queryByText } = render(<Display closed={true} />);
    expect(queryByText(/Open/i)).toBeFalsy();
});


test('If it is Unlocked and Open, the color should be greed-lit', () => {
    const { getByText} = render(<Display locked={false} />);
    expect(getByText(/Unlocked/i).classList.contains("green-led")).toBe(true);
})

test('If it is Locked and Closeed, the color should be red-lit', ()=> {
    const { getByText } = render(<Display locked={true} />);
    expect(getByText(/Locked/i).classList.contains("red-led")).toBe(true);
})