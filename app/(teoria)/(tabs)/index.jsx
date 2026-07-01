import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

export default function Index() {
  return (
    <Container>
      <StatusBar style="dark" />
      <Texto>componente index</Texto>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Texto = styled.Text``;
