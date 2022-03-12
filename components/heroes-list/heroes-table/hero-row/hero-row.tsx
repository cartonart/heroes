import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { heroesAtoms } from "../../../../atoms/heroes";
import { UnmountClosed } from "react-collapse";

import styles from "./hero-row.module.scss";
import classnames from "classnames";
import HeroCard from "../hero-card/hero-card";

type HeroRowProps = {
  id: number;
};

const HeroRow = React.memo((props: HeroRowProps) => {
  const { id } = props;
  const [hero] = useRecoilState(heroesAtoms(id));
  const [isOpen, setIsOpen] = useState(false);
  if (!hero) return <></>;
  const rowClass = id % 2 ? styles.even : styles.odd;
  return (
    <>
      <div className={rowClass}>{id}</div>
      <div className={rowClass}>{hero.name}</div>
      <div className={rowClass}>{hero.gender}</div>
      <div className={rowClass}>{hero.species}</div>
      <div className={rowClass}>{hero.status}</div>
      <div
        className={classnames(rowClass, styles.more)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <img src="/icons/arrow-up.svg" alt="Show Less" />
        ) : (
          <img src="/icons/arrow-down.svg" alt="Show More" />
        )}
      </div>
      <UnmountClosed
        isOpened={isOpen}
        theme={{
          collapse: classnames(styles.collapse, rowClass),
          content: styles.content,
        }}
      >
        <HeroCard hero={hero} />
      </UnmountClosed>
    </>
  );
});

export default HeroRow;
