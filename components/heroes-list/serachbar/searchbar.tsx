import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterState, searchedHeroAtom } from "../../../atoms/heroes";
import { isBrowseModeSelector } from "../../../atoms/mode";
import { getCharacter } from "../../../services/character-helper";
import styles from "./searchbar.module.scss";

const Searchbar = () => {
  const [value, setValue] = useState("");
  const [, setFilter] = useRecoilState(filterState);
  const isBrowseMode = useRecoilValue(isBrowseModeSelector);
  const [, setSearchedHero] = useRecoilState(searchedHeroAtom);

  const updateFilter = async () => {
    if (isBrowseMode) return setFilter(value);
    const hero = await getCharacter(value);
    setSearchedHero(hero);
  };

  const placeholder = isBrowseMode
    ? "Browse for characters..."
    : "Search for character Id";

  return (
    <div className={styles.wrapper}>
      <div className={styles["input-wrapper"]}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <button onClick={updateFilter}>Go</button>
    </div>
  );
};

export default Searchbar;
