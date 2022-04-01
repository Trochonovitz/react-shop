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

  const getProducts = useCallback(async () => {
    try {
      const response = await contentAPI.post(BASIC_URL, {
        query: allProductsQuery,
      });
      return response.data.data.allProducts;
    } catch (error) {
      console.log(error);
    }
  }, [allProductsQuery]);

  const getArticles = useCallback(async () => {
    try {
      const response = await contentAPI.post(BASIC_URL, {
        query: allArticlesQuery,
      });
      return response.data.data.allArticles;
    } catch (error) {
      console.log(error);
    }
  }, [allArticlesQuery]);

  return {
    getProducts,
    getArticles,
    blogArticleQuery,
    productQuery,
  };
};
