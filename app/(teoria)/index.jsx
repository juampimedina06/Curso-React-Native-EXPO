import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { FlatListComponent } from "./flatlist";
import { Gradientes } from "./gradientes";
import { SectionListComponent } from "./sectionlist";

export default function Index() {
  const dataCategorias = [
    {
      id: 1,
      name: "FlatList",
      component: <FlatListComponent />,
    },
    {
      id: 2,
      name: "SectionList",
      component: <SectionListComponent />,
    },
    {
      id: 3,
      name: "Gradientes",
      component: <Gradientes />,
    },
  ];

  const [selectCategoria, setSelecCategoria] = useState(dataCategorias[0]);

  return (
    <Container style={{ paddingTop: Platform.OS === "ios" ? 0 : 50 }}>
      <GradientBackground />
      <StatusBar style="light" />
      <Title>Seleccione una categoria</Title>
      <CategoriasSections>
        {dataCategorias.map((categoria) => (
          <CategoryContainer
            key={categoria.id}
            selected={selectCategoria.id === categoria.id}
            onPress={() => {
              setSelecCategoria(categoria);
            }}
          >
            <CategoriaName selected={selectCategoria.id === categoria.id}>
              {categoria.name}
            </CategoriaName>
          </CategoryContainer>
        ))}
      </CategoriasSections>
      <ContentComponent>{selectCategoria.component}</ContentComponent>
    </Container>
  );
}

const Title = styled.Text`
  font-size: 30px;
  color: #fff;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #000;
  position: relative;
`;

const CategoriasSections = styled.View`
  gap: 10px;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

//item de categoria
const CategoryContainer = styled.TouchableOpacity`
  background-color: ${({ selected }) => (selected ? "#1a2a47" : "#2d2d2d")};
  border-radius: 10px;
  padding: 10px;
  border: 1px solid ${({ selected }) => (selected ? "#4a61c4" : "transparent")};
`;

const CategoriaName = styled.Text`
  color: ${({ selected }) => (selected ? "#6380ff" : "#fff")};
`;

//componentes content
const ContentComponent = styled.View`
  background-color: #000000;
  flex: 1;
  width: 100%;
  margin-top: 20px;
`;

const GradientBackground = styled(LinearGradient).attrs({
  colors: ["#0d42b4", "transparent"],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.5 },
})`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
`;
