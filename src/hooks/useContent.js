export const useContent = () => {
  const blogsArticlesQuery = `query
    {
      allArticles(first: 3) {
        id
        category
            title
        mainPhoto {
          url(imgixParams: {})
        }
        content
      }
    }
    `;

  const twoBlogsArticlesQuery = `query
    {
      allArticles(first: 2) {
        id
        category
            title
        mainPhoto {
          url(imgixParams: {})
        }
        content
      }
    }
    `;

  const productsQuery = `query {
        allProducts {
          id
          name
          price
          productVisualisation {
            url(imgixParams: {})
          }
        }
      }
      `;

  return { blogsArticlesQuery, twoBlogsArticlesQuery, productsQuery };
};
