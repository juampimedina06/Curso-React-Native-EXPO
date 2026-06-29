import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export function Gradientes() {
  return (
    <Container>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#0b1227"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Card></Card>
      </LinearGradient>
    </Container>
  );
}

const Card = styled.View`
  width: 300px;
  height: 300px;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
