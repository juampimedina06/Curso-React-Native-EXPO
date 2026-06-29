import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, View } from "react-native";
import styled from "styled-components/native";

export function Screen2() {
  const router = useRouter();
  const data = useLocalSearchParams();
  return (
    <View>
      <Title>
        Hola {data.nombre} espero que disfrutes el curso de {data.curso}
      </Title>
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}

const Title = styled.Text`
  font-size: 50px;
  color: blue;
`;
