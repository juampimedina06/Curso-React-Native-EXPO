import { MaterialIcons } from "@expo/vector-icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Drawer } from "expo-router/drawer";

// Create a client
const queryClient = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Drawer
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "",
            drawerIcon: ({ color }) => (
              <MaterialIcons name="home" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="(1-conversor)"
          options={{
            drawerLabel: "Conversor",
            title: "Conversor",
            drawerIcon: ({ color }) => (
              <MaterialIcons name="compare" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="(teoria)"
          options={{
            drawerLabel: "Teoria",
            title: "Teoria",
            drawerIcon: ({ color }) => (
              <MaterialIcons name="book" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="(2-pokedex)"
          options={{
            drawerLabel: "Pokedex",
            title: "Pokedex",
            drawerIcon: ({ color }) => (
              <MaterialIcons name="ballot" size={24} color={color} />
            ),
          }}
        />
      </Drawer>
    </QueryClientProvider>
  );
}
