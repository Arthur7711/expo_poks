import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import axios from "axios";
import { IPokemonMainInfo, IPokemonProps } from "@/api/models/pokemon-item";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
export const PokemonItem = (props: IPokemonProps) => {
  const [pokemon, setPokemon] = useState<IPokemonMainInfo | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(props.url);
      setPokemon({ id: data.id, img: data.sprites.front_default || data.sprites.back_default });
    })();
  }, [props.url]);
  return (
    <Link
      href={{ pathname: "/pokemons/[id]", params: { id: pokemon?.id || 0 } }}
    >
      <View style={styles.main}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.name}</Text>
        </View>
        <Image
          style={styles.image}
          source={pokemon?.img}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    height: 200,
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "lightblue",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginVertical: 6,
  },
  textContainer: {
    flex: 1,
    gap: 8,
  },
  title: {
    fontSize: 24,
  },
  description: {
    fontSize: 18,
  },
  image: {
    flex: 1,
    width: 10,
    height: "100%",
    backgroundColor: "#0553",
  },
});
