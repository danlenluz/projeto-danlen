import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Products = ({ productList }) => (
  <Container>
    {productList.map(product => (
      <Card
        key={product.id}
        title={product.title}
        description={product.description}
        imageUrl={product.imageUrl} // Corrigido para usar imageUrl
      />
    ))}
  </Container>
);

export default Products;
