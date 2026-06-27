import { darkTheme, lightTheme } from "@/styles/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";

export default function Screen1() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const router = useRouter();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <ScrollView>
        <Container>
          <Imagen source={require("../../assets/images/react-logo.png")} />
        </Container>
        <TextInputEntrada placeholder="Ingresa tu nombre" />
        <Container>
          <Imagen source={require("../../assets/images/react-logo.png")} />
        </Container>
      </ScrollView>
    </ThemeProvider>
  );
}

const TextInputEntrada = styled.TextInput`
  font-size: 20px;
`;

const Imagen = styled.Image`
  width: 300px;
  height: 300px;
`;

const Title = styled.Text`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
