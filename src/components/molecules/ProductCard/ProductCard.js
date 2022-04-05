import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from 'store/basket';
import {
  Wrapper,
  Paragraph,
  Image,
  BuyButton,
  ImageWrapper,
} from './ProductCard.styles';
import Icon from 'components/atoms/Icon/Icon';
import { icons } from 'theme/theme';

const ProductCard = ({ name, price, img, id }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem({ name, price, img, id, quantity: 1 }));
  };

  return (
    <Wrapper as={Link} to={`/sklep/${id}`}>
      <ImageWrapper>
        <Image alt={`${name}`} srcSet={img} />
        <BuyButton onClick={handleAddItem}>
          <Icon path={icons.cart} size="20" />
        </BuyButton>
      </ImageWrapper>
      <Paragraph>{name}</Paragraph>
      <Paragraph>{price} zł</Paragraph>
    </Wrapper>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
