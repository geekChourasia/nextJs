import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Page Component', () => {
  const mockPosts = [
    { id: 1, title: 'Test Post 1', body: 'Test body 1' },
    { id: 2, title: 'Test Post 2', body: 'Test body 2' }
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPosts)
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the main heading', async () => {
    render(await Home());
    expect(screen.getByText('Posts')).toBeInTheDocument();
  });

  it('fetches posts from the API', async () => {
    render(await Home());
    expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
  });
});
