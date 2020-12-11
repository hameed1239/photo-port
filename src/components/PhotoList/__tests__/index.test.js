// __tests__/PhotoList.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../'

afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<PhotoList />);
  });

  it('matches fragment', () => {
    const { asFragment } = render(<PhotoList />)
    expect(asFragment()).toMatchSnapshot()
  });
});
