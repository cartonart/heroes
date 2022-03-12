import { useRecoilValue } from "recoil";
import { filteredHeroes } from "../../../atoms/heroes";
import HeroRow from "./hero-row/hero-row";
import styles from "./heroes-table.module.scss";

const HeroesTable = () => {
  const filtered = useRecoilValue(filteredHeroes);
  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div className={styles.header}>id</div>
        <div className={styles.header}>name</div>
        <div className={styles.header}>gender</div>
        <div className={styles.header}>species</div>
        <div className={styles.header}>status</div>
        <div className={styles.header}>more</div>
        {filtered.map((id: number) => (
          <HeroRow key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default HeroesTable;
