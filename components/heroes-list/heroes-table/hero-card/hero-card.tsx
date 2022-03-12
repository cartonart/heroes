import { Hero } from "../../../../atoms/heroes";
import styles from "./hero-card.module.scss";

type HeroCardProps = {
  hero: Hero;
};

type DetailProps = {
  details: Record<string, string | number>;
};

const HeroCard = ({ hero }: HeroCardProps) => {
  const { name, id, gender, species, origin } = hero;
  const details = { name, id, gender, species, origin: origin.name };
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={hero.image} alt={hero.name} />
      <div className={styles.card}>
        <h4>Character description</h4>
        <div className={styles.details}>
          <Detail details={details} />
        </div>
      </div>
    </div>
  );
};

const Detail = ({ details }: DetailProps) => {
  return (
    <>
      {Object.entries(details).map(([key, value]) => {
        return (
          <div className={styles.detail}>
            <div className={styles.label}>{key}</div>
            <div className={styles.value}>{value}</div>
          </div>
        );
      })}
    </>
  );
};

export default HeroCard;
