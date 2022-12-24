import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('app test', () => {
  beforeEach(() => render(<App />));

  test('header test', () => {
    const headerTitle = screen.getByText('Emoji Search');
    expect(headerTitle).toBeInTheDocument;
  });

  test('list test', () => {
    const items = screen.getAllByText('Click to copy emoji');
    expect(items.length).toEqual(20);
  });

  test('filter test', () => {
    const emoji = '100';
    const input = screen.getByRole('textbox');
    userEvent.type(input, emoji);
    expect(screen.getByText(emoji)).toBeInTheDocument;
  });

  test('copy test', () => {
    const click  = screen.getAllByText('Click to copy emoji').at(0);
    const parent = click.parentElement;
    expect(parent.getAttribute("data-clipboard-text").length).toBeGreaterThan(
      0
    );
  });
});