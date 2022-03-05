import React, { useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { useContent } from 'hooks/useContent';
import useCollapse from 'react-collapsed';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Button from 'components/atoms/Button/Button';
import {
  Wrapper,
  Description,
  Image,
  Content,
  Title,
  ShowContentButton,
  AdditionalInformations,
  StyledText,
  Header,
  Subtitle,
} from './DetailPageProduct.styles';
import { useDispatch } from 'react-redux';
import { addItem } from 'store/basket';

const DetailPageProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productQuery } = useContent(null, id);
  const { loading, error, data } = useQuery(productQuery);
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const handleOpenInformation = () => setExpanded(!isExpanded);
  const handleAddItem = () => {
    dispatch(addItem({ name, price, img, id, quantity: 1 }));
  };

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  const product = data.allProducts[0];
  const img = product.productVisualisation.url;
  const brand = product.brand;
  const name = product.name;
  const price = product.price;
  const description = product.description;

  return (
    <MainTemplate>
      <Wrapper>
        <Image alt="product's visualisation" src={img} />
        <Content>
          <Header>
            <Subtitle textType="p">{brand}</Subtitle>
            <Title textType="h2">{name}</Title>
            <Subtitle textType="p">{price} zł</Subtitle>
          </Header>
          <Description>{ReactHtmlParser(description)}</Description>
          <Button buttonType="green" onClick={handleAddItem}>
            Dodaj do koszyka: {price} zł
          </Button>
        </Content>
        <AdditionalInformations>
          <ShowContentButton
            {...getToggleProps({
              onClick: handleOpenInformation,
            })}
          >
            <Title textType="h2">Dostawa i płatność</Title>
          </ShowContentButton>
          <Content {...getCollapseProps()}>
            <Title textType="h2">Dostawa</Title>
            <StyledText>
              Zamówienia realizujemy na terenie Polski. Możesz wybrać jedną z
              kilku opcji wysyłki towaru:
              <ul>
                <li>Kurier DHL – 15 zł</li>
                <li>Kurier DPD – 15 zł</li>
                <li>Paczkomaty Inpost – 11 zł</li>
                <li>
                  Odbiór osobisty bez dodatkowych opłat – w naszym sklepie
                  stacjonarnym w Krakowie, ul. Limanowskiego 18, Pn.-Pt.: 12-18,
                  Sb.: 12-16
                </li>
              </ul>
              Dla zamówień o wartości min. 200 zł dostawa jest darmowa. Paczki
              docierają zazwyczaj na kolejny dzień roboczy od momentu wysłania.
            </StyledText>
            <Title textType="h2">Wysyłka zagraniczna</Title>
            <StyledText>
              Jeśli chcesz zamówić towar z dostawą poza granice Polski, napisz
              na: hej@papierniczeni.pl. Skalkulujemy koszty wysyłki i
              poinformujemy Cię o dalszych krokach.
            </StyledText>
            <Title textType="h2">Czas realizacji zamówienia</Title>
            <StyledText>
              Zamówienia wysyłamy codziennie w dni robocze. Od momentu
              zaksięgowania wpłaty, Twoje zamówienie wyślemy najpóźniej w ciągu
              48 h. Jeśli zależy Ci na ekspresowej wysyłce, napisz na
              help@papierniczeni.pl lub zadzwoń 504 865 233, zadziałamy
              najszybciej jak to możliwe!
            </StyledText>
            <Title textType="h2">Płatność</Title>
            <StyledText>
              Płatności za zamówienie dokonasz na dwa sposoby:
              <ol>
                <li>
                  tradycyjnym na rachunek bankowy Nr rachunku: 67 1870 1045 2083
                  1052 7295 0001 (Nest Bank) W tytule przelewu podaj numer
                  zamówienia.
                </li>
                <li>
                  Przelewem elektronicznym online (Przelewy24) Jeśli zależy Ci
                  na szybszej realizacji zamówienia, skorzystaj z przelewów
                  elektronicznych online (Przelewy24).
                </li>
              </ol>
              Płatność zostanie od razu zaksięgowana i szybciej przygotujemy
              Twoje zamówienie do wysyłki. Na opłacenie zamówienia czekamy 5 dni
              roboczych. Po upływie tego terminu, zamówienie zostanie anulowane.
            </StyledText>
          </Content>
        </AdditionalInformations>
      </Wrapper>
    </MainTemplate>
  );
};

export default DetailPageProduct;
