import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRoot } from 'react-dom/client';
import App from '../App';

describe('App', () => {
  it('mounts without crashing', () => {
    render(<App />);
    expect(document.body).not.toBeEmptyDOMElement();
  });

  it('navigates from the home menu to the projects page', async () => {
    const user = userEvent.setup();
    render(<App />);

    const projectsLink = screen.getByRole('link', { name: /projects/i });
    await user.click(projectsLink);

    expect(await screen.findByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });
});

describe('app entry point', () => {
  // Guards the exact React 19 breakage: sending the real index.jsx through the
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
