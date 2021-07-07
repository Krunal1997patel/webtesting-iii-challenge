import React from 'react'
import { render } from '@testing-library/react'

import Dashboard from './Dashboard';

// Test away

test('screen shot of the code in HTML', () => {
    expect(render(<Dashboard/>)).toMatchSnapshot();
});

test('This is rending', () => {
    render(<Dashboard/>)
})

test('text is working', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/open/i);
    getByText(/unlocked/i);
  });