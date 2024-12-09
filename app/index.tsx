import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import { PokemonItem } from "@/components/pokemonItem";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer} edges={["top", "bottom"]}>
        <ScrollView style={styles.mainBox}>
          <View style={styles.itemContainer}>
            <PokemonItem
              description="description 111"
              id={1}
              name="First pokemon"
            />
          </View>
          <View style={styles.itemContainer}>
            <PokemonItem
              description="description 111"
              id={1}
              name="First pokemon"
            />
          </View>
          <View style={styles.itemContainer}>
            <PokemonItem
              description="description 111"
              id={1}
              name="First pokemon"
            />
          </View>
          <View style={styles.itemContainer}>
            <PokemonItem
              description="description 111"
              id={1}
              name="First pokemon"
            />
          </View>
          <View style={styles.itemContainer}>
            <PokemonItem
              description="description 111"
              id={1}
              name="First pokemon"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    gap: 12,
    paddingHorizontal: 20,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "rgba(174,216,230, .4)",
  },
  itemContainer: {
    paddingVertical: 8,
  },
});
