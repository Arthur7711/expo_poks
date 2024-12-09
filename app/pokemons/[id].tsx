import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

interface IPokemon {
  name: string;
  description: string;
  id: number | string;
  img?: string;
}

export default function PokemonPage() {
  return (
    <View style={styles.main}>
      <Text>Title</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    gap: "8px",
  },
});
