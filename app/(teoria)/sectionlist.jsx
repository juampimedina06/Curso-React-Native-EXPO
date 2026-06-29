import { SectionList } from "react-native";
import styled from "styled-components/native";

export function SectionListComponent() {
  const dataSectionList = [
    {
      title: "Bebidas",
      data: [
        { producto: "cerveza", precio: "$1500" },
        { producto: "vino", precio: "$2500" },
        { producto: "agua", precio: "$1300" },
        { producto: "coca", precio: "$2000" },
      ],
    },
    {
      title: "Postres",
      data: [
        { producto: "helado", precio: "$5000" },
        { producto: "chocolate", precio: "$1000" },
        { producto: "chicles", precio: "$800" },
        { producto: "papas", precio: "$2500" },
      ],
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <ContainerItem>
        <Producto>{item.producto}</Producto>
        <Producto>{item.precio}</Producto>
      </ContainerItem>
    );
  };

  const renderHeader = ({ section }) => {
    return <HeaderText>{section.title}</HeaderText>;
  };

  const renderFooter = () => {
    return <Producto> Pie de Pagina</Producto>;
  };

  return (
    <Container>
      <Title>SectionList</Title>
      <SectionList
        renderSectionFooter={renderFooter}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        sections={dataSectionList}
      />
    </Container>
  );
}

const Title = styled.Text`
  font-size: 30px;
  color: #fff;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding-top: 40px;
`;

const ContainerItem = styled.View`
  flex-direction: row;
  gap: 20px;
`;

const Producto = styled.Text`
  color: #d1d0d0;
`;

//Estilos para el sectionList

const HeaderText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
