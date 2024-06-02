import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomeLayout from './layout';

test('HomeLayout', () => {
  render(<HomeLayout />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Nathan Levick' })
  ).toBeDefined();
});
