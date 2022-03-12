import { Hero } from "../atoms/heroes";

type CharactersResponse = {
  results: Hero[];
};

const baseUrl = "https://rickandmortyapi.com/api/character";

export const getCharacters = async (): Promise<CharactersResponse> => {
  try {
    return await (await fetch(baseUrl)).json();
  } catch (err) {
    //do something...
    return { results: [] };
  }
};

export const getCharacter = async (id: string): Promise<Hero | null> => {
  try {
    return await (await fetch(`${baseUrl}/${id}`)).json();
  } catch (err) {
    //do something...
    return null;
  }
};
