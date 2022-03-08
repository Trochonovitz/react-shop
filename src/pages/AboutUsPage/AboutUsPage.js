import React from 'react';
import Lead from 'components/atoms/Lead/Lead';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { Content, Paragraph, Title } from './AboutUsPage.styles';

const AboutUsPage = () => (
  <MainTemplate>
    <Content>
      <Title textType="h2">O nas</Title>
      <Paragraph>
        Jesteśmy Papierniczeni, ale co to właściwie znaczy? Chcemy podzielić się
        naszą pasją do papieru! Stąd narodził się pomysł na Papierniczonych –
        ludzi zwariowanych na punkcie papieru. W dobie nowych technologii i
        wszechobecnych ekranów, my lubimy sięgać do obiektów analogowych.
        Dotykać papieru, pisać po nim i odkrywać jego potencjał na nowo.
      </Paragraph>
      <Title textType="h2">Wyjątkowy sklep</Title>
      <Paragraph>
        Na Limanowskiego 18 w Krakowie jest nasze centrum dowodzenia i tutaj
        możecie nas najczęściej spotkać. To tu mieszczą się nasze biuro, sklep i
        pracownia. Często zapraszamy Was do niego na warsztaty i inne spotkania
        – obcujemy wtedy z papierem i wytwarzamy z niego papiernicze cuda. Można
        też nas odwiedzać bez okazji – obejrzeć notatnik, dotknąć papierowej
        okładki, przetestować przybory do pisania. Prowadzimy sklep internetowy
        i stacjonarny z wyjątkowymi przyborami do pisania, akcesoriami i
        wyrobami papierniczymi.
      </Paragraph>
      <Lead>
        Przeprowadzamy staranną selekcję, aby przedmioty dostępne w naszym
        sklepie były pięknie wykonane, miały ciekawy design i były funkcjonalne
        – wszystko dla codziennej przyjemności i wygody użytkowania.
      </Lead>
      <Title textType="h2">Nasza pracownia</Title>
      <Paragraph>
        Tworzymy również autorskie linie notesów, które inspirowane są
        tradycyjnymi technikami introligatorskimi. Dbamy o to, aby były osadzone
        w świeżej, nowoczesnej estetyce. Wykonujemy ręcznie liczne prace
        introligatorskie, które nadają niepowtarzalnego charakteru naszym
        produktom. Ale również stale rozwijamy nasz park maszynowy, aby oferować
        coraz większą precyzję. Liczą się dla nas staranność wykonania i
        dopracowane detale.
      </Paragraph>
      <Lead>
        Chcemy, żeby korzystanie z naszych notesów pomagało w codziennych
        sprawach, a odręczne pisanie dostarczało pozytywnych doznań.
      </Lead>
      <Title textType="h2">Jak powstają nasze kolekcje?</Title>
      <Paragraph>
        Tworzenie notesów zaczynamy od szukania inspiracji i poszukiwania
        papierniczych potrzeb. Powolna ewolucja pomysłu przeradza się w projekt,
        na podstawie którego tworzymy prototypy naszego notesu. Jeżeli wszystko
        jest na swoim miejscu i zwyczajnie nam się podoba, to przystępujemy do
        kolejnego kroku. Wtedy cała uwaga przenosi się do naszej pracowni. Tam
        dbamy o to, aby każdy z nich był pięknie wykonany i aby korzystanie z
        niego było samą przyjemnością.
      </Paragraph>
      <Title textType="h2">Ludzie</Title>
      <Paragraph>
        Papierniczeni od początku swojego istnienia jest małą, rodzinną
        manufakturą. Obecnie Papierniczony zespół tworzy siedem osób. Codziennie
        stawiamy sobie za cel dostarczanie pozytywnych emocji związanych z
        papierem.
      </Paragraph>
      <Lead>
        Doradzamy, wysyłamy paczki, projektujemy i tworzymy notesy, organizujemy
        warsztaty – najlepiej jak potrafimy.
      </Lead>
    </Content>
  </MainTemplate>
);

export default AboutUsPage;
