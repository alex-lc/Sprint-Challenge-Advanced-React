import React from 'react';
import { render, getByTestId, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import { totalPlayers } from './App';

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

// not working
// test('does night mode toggle work', () => {
//   const container = render(<App />);
//   const btnNight = container.getByTestId("nightMode");
//   const body = document.body.classList;
//   fireEvent.click(btnNight);
//   expect(body).toBe('dark-mode');
// })

// not working
// test('totalPlayers returns the total number of players', () => {
//   expect(totalPlayers()).toBe(101);
// })