export const useContent = (quantity = '', id) => {
  const blogArticlesQuery = `query {
    allArticles${quantity} {
      id
      category
      title
      mainPhoto {
        responsiveImage {
          srcSet
        }
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
        responsiveImage {
          srcSet
        }
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
          category
          productVisualisation {
            responsiveImage {
              srcSet
            }
          }
        }
      }
      `;

  const productQuery = `query {
    allProducts(filter: { id: { eq: "${id}" } }) {
      name,
      price,
      productVisualisation {
        responsiveImage {
          srcSet
      },
      brand,
      description
    }
  }`;

  const productInfoQuery = `query {
    allProducts {
      id,
      name,
      price,
      productVisualisation {
        url(imgixParams: {})
        responsiveImage {
          srcSet
        }
      },
    }
  }`;

  return {
    blogArticlesQuery,
    blogArticleQuery,
    productsQuery,
    productQuery,
    productInfoQuery,
  };
};
