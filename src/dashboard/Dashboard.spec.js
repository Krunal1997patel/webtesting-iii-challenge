import React from 'react'
import { render } from '@testing-library/react'

import Dashboard from './Dashboard';

// Test away

test('This is working', () => {
    expect(render(<Dashboard/>)).toMatchSnapshot();
});