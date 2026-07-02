import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export default function Index() {
  const dataRutas = [
    { name: "conversor", href: "/(1-conversor)" },
    { name: "teoria", href: "/(teoria)" },
    { name: "tabs", href: "/(tabs)" },
    { name: "pokedex", href: "/(2-pokedex)" },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => router.push(item.href)}>
        <LinkButton>
          <IconContainer>
            <MaterialIcons name="insert-drive-file" size={24} color="white" />
            <Name>{item.name}</Name>
          </IconContainer>
          <Arrow name="chevron-right" size={24} color="white" />
        </LinkButton>
      </TouchableOpacity>
    );
  };

  return (
    <Container style={{ paddingTop: Platform.OS === "ios" ? 0 : 50 }}>
      <StatusBar style="light" />
      <Title>MENU</Title>
      <List
        keyExtractor={(item) => item.name}
        data={dataRutas}
        renderItem={renderItem}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
const Title = styled.Text`
  color: #fff;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

//estilos para render item
const LinkButton = styled.View`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 20px;
  align-items: center;
  border: 2px solid #333;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #fff;
  flex: 1;
`;

const Arrow = styled(MaterialIcons)`
  color: #fff;
  font-size: 30px;
`;

const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const List = styled(FlatList)`
  width: 100%;
  padding: 10px;
`;
