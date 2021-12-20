export const useContent = () => {
  const blogsArticlesQuery = `query
    {
      allArticles {
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
