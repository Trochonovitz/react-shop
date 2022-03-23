import { useCallback } from 'react';
import axios from 'axios';

const BASIC_URL = 'https://graphql.datocms.com/';
const contentAPI = axios.create({});
contentAPI.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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

  const getProducts = useCallback(
    async (signal) => {
      try {
        const response = await contentAPI.post(BASIC_URL, {
          query: productsQuery,
          signal,
        });
        return response.data.data.allProducts;
      } catch (error) {
        console.log(error);
      }
    },
    [productsQuery]
  );

  return {
    getProducts,
    blogArticlesQuery,
    blogArticleQuery,
    productsQuery,
    productQuery,
    productInfoQuery,
  };
};
