import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

interface IPokemon {
  name: string;
  description: string;
  id: number | string;
  img?: string;
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const PokemonItem = (props: IPokemon) => {
  return (
    <Link href={{ pathname: "/pokemons/[id]", params: { id: props.id } }}>
      <View style={styles.main}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/696/3000/2000"
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
