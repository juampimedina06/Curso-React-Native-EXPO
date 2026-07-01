import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ActivityIndicator, FlatList } from "react-native";
import styled from "styled-components/native";

export function FetchComponent() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["mostrar emojis"],
    queryFn: () =>
      axios
        .get("https://emojihub.yurace.pro/api/all")
        .then((response) => response.data),
  });

  // useEffect(() => {
  //   // fetch("https://emojihub.yurace.pro/api/all")
  //   //   .then((response) => {
  //   //     if (!response.ok) {
  //   //       throw new Error("error al hacer fetch");
  //   //     }
  //   //     return response.json();
  //   //   })
  //   //   .then((data) => setData(data));

  //   axios
  //     .get("https://emojihub.yurace.pro/api/all")
  //     .then((response) => {
  //       setData(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color={"#fff"} />;
  }

  if (isError) {
    return <Texto>Error al cargar los emojis</Texto>;
  }

  const renderItem = ({ item }) => {
    return <Texto>{item.name}</Texto>;
  };

  return (
    <Container>
      <Texto>Fetch</Texto>
      {/*

       {data.map((item, index) => (
        <Texto key={index}>{item.name}</Texto>
      ))} */}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Texto = styled.Text`
  color: #fff;
`;
