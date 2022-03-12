import { useRecoilValue } from "recoil";
import { searchedHeroAtom } from "../../../atoms/heroes";
import HeroCard from "../heroes-table/hero-card/hero-card";
import styles from "./searched-hero.module.scss";

const SearchedHero = () => {
  const hero = useRecoilValue(searchedHeroAtom);

  return (
    <div className={styles.wrapper}>
      {hero ? (
        <HeroCard hero={hero} />
      ) : (
        <div className={styles.default}>
          <img src="/images/search.svg" />
          <p>Search for a character id in order to view a character</p>
        </div>
      )}
    </div>
  );
};

export default SearchedHero;
