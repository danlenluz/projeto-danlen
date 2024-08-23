import styled from 'styled-components';
import Title from './Title';
import Description from './Description';
import Image from './Image'; // Corrigido para usar o Image estilizado

const CardWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Card = ({ title, description, imageUrl }) => (
  <CardWrapper>
    <Image src={imageUrl} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </CardWrapper>
);

export default Card;
