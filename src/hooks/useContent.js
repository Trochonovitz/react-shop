export const useContent = (id) => {
  const allArticlesQuery = `query {
    allArticles {
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

  const allProductsQuery = `query {
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
      },
      brand,
      description
    }
  }`;

  return {
    allArticlesQuery,
    allProductsQuery,
    blogArticleQuery,
    productQuery,
  };
};
