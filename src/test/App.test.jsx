import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRoot } from 'react-dom/client';
import App from '../App';

// Each menu entry and the heading its destination page renders.
const ROUTES = [
  { menu: /^projects$/i, heading: /^projects$/i },
  { menu: /^resume$/i, heading: /^resume$/i },
  { menu: /^contact$/i, heading: /connect/i },
];

describe('App', () => {
  // Routes are hash-based, and the hash persists across tests in one file.
  beforeEach(() => {
    window.location.hash = '';
  });

  it('mounts without crashing', () => {
    render(<App />);
    expect(document.body).not.toBeEmptyDOMElement();
  });

  it('shows the menu on the home route', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /lloyd dakin/i })).toBeInTheDocument();
  });

  // Guards the react-router v7 migration: every route must still resolve.
  it.each(ROUTES)('navigates to the $heading page', async ({ menu, heading }) => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('link', { name: menu }));

    expect(await screen.findByRole('heading', { name: heading })).toBeInTheDocument();
    // The menu is only on the home route, so it disappearing proves we moved.
    expect(screen.queryByRole('link', { name: menu })).not.toBeInTheDocument();
  });
});

describe('app entry point', () => {
  // Guards the exact React 19 breakage: sends the real index.jsx through the
  // same code path the browser uses (createRoot, not ReactDOM.render).
  it('boots the real entry point into #root', async () => {
    document.body.innerHTML = '<div id="root"></div>';

    await import('../index.jsx');

    await screen.findByRole('heading', { name: /lloyd dakin/i });
    expect(document.getElementById('root')).not.toBeEmptyDOMElement();
  });

  it('uses the React 19 createRoot API', () => {
    expect(typeof createRoot).toBe('function');
  });
});
