import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Pokemons list",
        }}
      />
    </Stack>
  );
}
