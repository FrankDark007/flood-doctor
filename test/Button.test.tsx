import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from '../components/ui/Button';

// Wrapper for Router context
const RouterWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('Button', () => {
  describe('rendering', () => {
    it('renders children correctly', () => {
      render(
        <RouterWrapper>
          <Button>Click Me</Button>
        </RouterWrapper>
      );
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('applies primary variant styles by default', () => {
      render(
        <RouterWrapper>
          <Button>Primary</Button>
        </RouterWrapper>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-primary');
    });

    it('applies outline variant styles', () => {
      render(
        <RouterWrapper>
          <Button variant="outline">Outline</Button>
        </RouterWrapper>
      );
      const button = screen.getByRole('button');
      // Outline variant uses bg-transparent with border
      expect(button).toHaveClass('bg-transparent');
      expect(button).toHaveClass('border');
    });

    it('applies fullWidth class when prop is true', () => {
      render(
        <RouterWrapper>
          <Button fullWidth>Full Width</Button>
        </RouterWrapper>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass('w-full');
    });

    it('renders as disabled when disabled prop is true', () => {
      render(
        <RouterWrapper>
          <Button disabled>Disabled</Button>
        </RouterWrapper>
      );
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  describe('interactions', () => {
    it('calls onClick handler when clicked', () => {
      const handleClick = vi.fn();
      render(
        <RouterWrapper>
          <Button onClick={handleClick}>Click</Button>
        </RouterWrapper>
      );
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = vi.fn();
      render(
        <RouterWrapper>
          <Button onClick={handleClick} disabled>
            Disabled
          </Button>
        </RouterWrapper>
      );
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('link behavior', () => {
    it('renders as Link when "to" prop is provided', () => {
      render(
        <RouterWrapper>
          <Button to="/services/">Go to Services</Button>
        </RouterWrapper>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/services/');
    });

    it('renders as anchor when "href" prop is provided', () => {
      render(
        <RouterWrapper>
          <Button href="tel:8774970007">Call Us</Button>
        </RouterWrapper>
      );
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'tel:8774970007');
    });
  });
});
