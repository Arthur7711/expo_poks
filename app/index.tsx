import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import { PokemonItem } from "@/components/pokemonItem";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { getPokemons } from "@/api/pokemons";
import { IPokemon } from "@/api/models";

export default function Index() {
  const [pokemons, setPokemons] = useState<Array<IPokemon>>([]);

  useEffect(() => {
    (async () => {
      const data = await getPokemons();
      setPokemons(data.results);
    })();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer} edges={["top", "bottom"]}>
        <ScrollView style={styles.mainBox}>
          {pokemons.map((el) => (
            <View style={styles.itemContainer} key={el.url}>
              <PokemonItem name={el.name} url={el.url} />
            </View>
          ))}
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
