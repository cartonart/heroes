import React from "react";
import { useRecoilValue } from "recoil";
import { isBrowseModeSelector } from "../../atoms/mode";
import styles from "./heroes-list.module.scss";
import HeroesTable from "./heroes-table/heroes-table";
import SearchedHero from "./searched-hero/searched-hero";
import Searchbar from "./serachbar/searchbar";

const HeroesList = React.memo(function () {
  const isBrowseMode = useRecoilValue(isBrowseModeSelector);
  return (
    <div className={styles.wrapper}>
      <Searchbar />
      {isBrowseMode ? <HeroesTable /> : <SearchedHero />}
    </div>
  );
});

export default HeroesList;
