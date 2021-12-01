import styled from 'styled-components';
import { ButtonWithUnderline } from 'components/atoms/ButtonWithUnderline/ButtonWithUnderline';

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
  /* height: 125px; */
  padding: 10px 20px;
  margin: 20px 0;
`;

export const Info = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  grid-column: 1;
  align-self: center;
  padding: 10px 0;
`;

export const InsideWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 15px;
  margin: 0 0 0 20px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Control = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

export const Paragraph = styled.p`
  text-transform: uppercase;
  color: #595959;
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  margin: 0 0 10px 0;
`;

export const Input = styled.input.attrs({
  type: 'number',
  defaultValue: 1,
  min: 1,
  max: 15,
})`
  width: 80%;
  border: 1px solid #e3e3e3;
`;

export const StyledButtonWithUnderline = styled(ButtonWithUnderline)`
  align-self: center;
  justify-self: center;
  font-size: 0.7rem;
  width: 50%;
`;
