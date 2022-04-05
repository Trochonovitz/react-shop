import '@testing-library/jest-dom';
import { render, screen } from 'test-utils';
import BlogArticle from './BlogArticle';

describe('BlogArticle Component', () => {
  it('renders article with valid values', () => {
    render(
      <BlogArticle
        id="1"
        category="test"
        img="text"
        title="title test"
        lead="lead test"
      />
    );
    const title = screen.getByText(/title test/i);
    const lead = screen.getByText(/lead test/i);
    expect(title).toBeInTheDocument();
    expect(lead).toBeInTheDocument();
  });
});
