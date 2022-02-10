export const useContent = (quantity = '', id) => {
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

  const productQuery = `query {
    allProducts(filter: { id: { eq: "${id}" } }) {
      name,
      price,
      productVisualisation {
        url(imgixParams: {})
      },
      brand,
      description
    }
  }`;

  return { blogsArticlesQuery, productsQuery, productQuery };
};
