import { useRouter } from "expo-router";
import styled from "styled-components/native";

export default function Index() {
  const Router = useRouter();
  return (
    <Container>
      <Icon
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/5735/5735261.png",
        }}
      />
      <Tittle>Conversor</Tittle>
      <SubTittle>(cm) a (m)</SubTittle>
      <StartButton>
        <ButtonText onPress={() => Router.push("conversor")}>
          Iniciar
        </ButtonText>
      </StartButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #a98cd8d5;
`;
const Tittle = styled.Text`
  font-size: 50px;
  font-weight: 900;
  text-align: center;
  color: #3a1c04;
`;

const SubTittle = styled.Text`
  font-size: 30px;
  margin-bottom: 20px;
  color: #3a1c04;

  text-align: center;
`;

const StartButton = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  background-color: #3a1c04;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
`;

const Icon = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;
