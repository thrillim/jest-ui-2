import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Dashboard from '../../../app/dashboard/page';

describe('Dashboard', () => {
  it('renders without crashing', () => {
    // approach 1
    // const { getByTestId } = render(<Dashboard />);
    // expect(getByTestId('dashboard')).toBeInTheDocument();

    // approach 2
    render(<Dashboard />);
    const dashboard = screen.getByTestId('dashboard');
    expect(dashboard).toHaveClass('blue');
    expect(dashboard).toHaveTextContent('Dashboard');
  });
});
