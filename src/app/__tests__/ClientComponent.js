import { render, screen, fireEvent } from '@testing-library/react';
import ClientComponent from '../ClientComponent';

describe('ClientComponent', () => {
  const mockPosts = [
    { id: 1, title: 'First Post', body: 'Content 1', userId: 1 },
    { id: 2, title: 'Second Post', body: 'Content 2', userId: 2 },
  ];

  it('renders search input', () => {
    render(<ClientComponent posts={mockPosts} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('filters posts based on search input', () => {
    render(<ClientComponent posts={mockPosts} />);
    const searchInput = screen.getByPlaceholderText(/search/i);
    
    fireEvent.change(searchInput, { target: { value: 'First' } });
    
    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.queryByText('Second Post')).not.toBeInTheDocument();
  });

  it('renders all posts initially', () => {
    render(<ClientComponent posts={mockPosts} />);
    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
  });
});