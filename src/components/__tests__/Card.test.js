import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card Component', () => {
  const mockProps = {
    id: 1,
    title: 'Test Post Title'
  };

  it('renders post title', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('applies correct styling', () => {
    const { container } = render(<Card {...mockProps} />);
    expect(container.firstChild).toHaveClass('card');
  });
});