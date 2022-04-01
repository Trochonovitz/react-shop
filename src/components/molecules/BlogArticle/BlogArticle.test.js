import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';
import BlogArticle from './BlogArticle';

describe('BlogArticle Component', () => {
  it('renders article with valid values', () => {
    const { getByText } = render(
      <AppProviders>
        <BlogArticle
          id="1"
          category="test"
          img="text"
          title="title test"
          lead="lead test"
        />
      </AppProviders>
    );
    const title = getByText(/title test/i);
    const lead = getByText(/lead test/i);
    expect(title).toBeInTheDocument();
    expect(lead).toBeInTheDocument();
  });
});
