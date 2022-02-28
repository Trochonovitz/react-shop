export const useContent = (quantity = '', id) => {
  const blogArticlesQuery = `query {
    allArticles${quantity} {
      id
      category
      title
      mainPhoto {
        url(imgixParams: {})
      }
      content,
      lead
        }
      }
    `;

  const blogArticleQuery = `query {
    allArticles(filter: { id: { eq: "${id}" } }) {
      category
      title
      mainPhoto {
        url(imgixParams: {})
        }
      content,
      lead,
      _firstPublishedAt
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

  return {
    blogArticlesQuery,
    blogArticleQuery,
    productsQuery,
    productQuery,
  };
};
