import React from "react";
import { render } from "@testing-library/react";

import Controls from "./Controls";

// Test away!

test('Making a Snapshot', () => {
    expect(render(<Controls/>)).toMatchSnapshot()
})

test('Controls is rending', () => {
    render(<Controls/>)
})


test('if Close is toggled the gate is locked', () => {
    const { getByText } = render( 
        <Controls locked={true} closed={true} />
    );

    expect(getByText(/open gate/i).disabled).toBe(true);
});
  
test('if Lock is toggled the gate is open', () => {
    const { getByText } = render( 
        <Controls locked={false} closed={false} />
    );

    expect(getByText(/lock gate/i).disabled).toBe(true);
});

