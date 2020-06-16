import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
