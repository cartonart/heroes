import { atom, atomFamily, selector } from "recoil";
var memoize = require("memoize");

export type Hero = {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
  isOpen?: boolean;
  origin: { name: string };
};

export const heroesIds = atom({
  key: "heroesIds",
  default: [] as number[],
});

export const heroesAtoms = atomFamily({
  key: "hero",
  default: null as null | Hero,
});

export const searchedHeroAtom = atom({
  key: "searchedHero",
  default: null as null | Hero,
});

export const filterState = atom({
  key: "filterState",
  default: "",
});

export const filteredHeroes = selector({
  key: "filteredHeroes",
  get: ({ get }) => {
    const heroes = get(heroesIds);
    const filter = get(filterState);

    if (!filter) return heroes;
    const lowerCaseFilter = filter.toLocaleLowerCase();
    return heroes.filter((id) =>
      get(heroesAtoms(id))?.name.toLocaleLowerCase().includes(lowerCaseFilter)
    );
  },
});
