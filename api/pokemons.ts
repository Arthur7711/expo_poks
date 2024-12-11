import { API } from "./api";
import { IPokemons } from "./models";

export const getPokemons = async (): Promise<IPokemons> => {
  const { data } = await API.get("/pokemon");
  return data;
};
