import styled from "styled-components/native";

export default function Details() {
  return (
    <Container>
      <Texto>componente detalle</Texto>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Texto = styled.Text``;
