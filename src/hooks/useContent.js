import axios from 'axios';

export const useContent = (quantity = '', id) => {
  const getProducts = async (signal) => {
    try {
      const response = await axios.post(
        'https://graphql.datocms.com/',
        { query: productsQuery, signal },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      );
      return response.data.data.allProducts;
    } catch (error) {
      console.log(error);
    }
  };

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
    getProducts,
    blogArticlesQuery,
    blogArticleQuery,
    productsQuery,
    productQuery,
    productInfoQuery,
  };
};
