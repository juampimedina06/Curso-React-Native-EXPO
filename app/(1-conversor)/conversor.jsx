import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";

export default function Conversor() {
  const [centimetros, setCentimetros] = useState("");
  const [metros, setMetros] = useState(null);
  const Router = useRouter();

  const convertirCmaM = () => {
    if (!centimetros) {
      Alert.alert("Error", "Ingrese un valor");
      return;
    }
    setMetros(centimetros / 100);
  };

  return (
    <Container>
      <InpunTextEstilo
        onChangeText={setCentimetros}
        placeholder="centimetros (cm)"
        keyboardType="number-pad"
      />
      <BotonEstilo>
        <BotonTexto onPress={convertirCmaM}>Calcular</BotonTexto>
      </BotonEstilo>
      <Tittle>Resultado: {metros !== null ? `${metros} m` : "-"} </Tittle>
      <StartButton>
        <ButtonText onPress={() => Router.back()}>Volver</ButtonText>
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
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: #3a1c04;
`;

const InpunTextEstilo = styled.TextInput`
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  width: 90%;
  text-align: center;
  background-color: #fff;
  margin-bottom: 10px;
`;

const BotonEstilo = styled.TouchableOpacity`
  font-size: 20px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
`;

const BotonTexto = styled.Text`
  font-size: 20px;
  color: #3a1c04;
  text-align: center;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
`;

const StartButton = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  background-color: #3a1c04;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 20px;
`;
