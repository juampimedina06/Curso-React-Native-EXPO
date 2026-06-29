import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export function FlatListComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const llamarData = (page) => {
    return Array.from({ length: 20 }, (_, i) => ({
      producto: `Producto ${page * 20 + i + 1}`,
    }));
  };

  const cargarData = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newData = llamarData(page);
      setData([...data, ...newData]);
      setPage(page + 1);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    cargarData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <ContainerItem>
        <Producto>{item.producto}</Producto>
      </ContainerItem>
    );
  };

  return (
    <Container>
      <Title>FlatList</Title>
      <ListaFlat
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.producto}
        onEndReached={cargarData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          loading ? <ActivityIndicator size="large" color="#2432b4f" /> : null
        }
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

//Estilo para el renderItem del FlastList
const ListaFlat = styled.FlatList``;

const ContainerItem = styled.View`
  flex-direction: row;
  gap: 20px;
`;

const Producto = styled.Text`
  color: #d1d0d0;
`;
