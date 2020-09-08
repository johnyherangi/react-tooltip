import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import { Tooltip } from './Tooltip';

test('renders tooltip', async () => {
    const { getByText, container } = render(
        <Tooltip title="bar">
            <p>foo</p>
        </Tooltip>,
    );
    const foo = getByText(/foo/i);
    expect(foo).toBeInTheDocument();
    foo.click();
    await waitForDomChange({ container });
    const bar = getByText(/bar/i);
    expect(bar).toBeInTheDocument();
});
