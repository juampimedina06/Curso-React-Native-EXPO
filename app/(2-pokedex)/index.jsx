import axios from "axios";
import { Platform } from "react-native";
import styled from "styled-components/native";

export default function Index() {
  const mostrarPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
    const res = await axios.get(url);
  };

  return (
    <Container
      style={Platform.OS === "ios" ? { paddingTop: 0 } : { paddingTop: 50 }}
    >
      <ImageFondo source={require("../../assets/images/pokebola.png")} />
      <Header>
        <UserData>
          <ImagenUser source={require("../../assets/images/pikachu.jpg")} />
        </UserData>
        <Tittle>Pokedex</Tittle>
      </Header>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #000;
  position: relative;
`;
const Texto = styled.Text`
  color: #fff;
`;

const ImageFondo = styled.Image`
  position: absolute;
  width: 400px;
  height: 400px;
  opacity: 0.2;
  top: 0;
  right: -150px;
  object-fit: contain;
`;

//#region Header
const Header = styled.View``;

const UserData = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: #fff;
  padding: 8px;
  position: relative;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
`;

const ImagenUser = styled.Image`
  width: 100%;
  height: 100%;
`;

const Tittle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

//#endregion
