export const useContent = (quantity = '') => {
  const blogsArticlesQuery = `query
    {
      allArticles${quantity} {
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

  return { blogsArticlesQuery, productsQuery };
};
