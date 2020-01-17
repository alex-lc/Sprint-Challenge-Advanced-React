import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import App from './App';

test('renders app component without crashing', () => {
  render(<App />);
});

test('header renders', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/header/i);
});

test('logo h1 renders', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/logo/i);
});

test('theme changer renders', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/themechanger/i);
})

test('player list renders', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/playerlist/i);
})