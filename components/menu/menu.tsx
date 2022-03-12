import classNames from "classnames";
import { useRecoilState, useRecoilValue } from "recoil";
import { isBrowseModeSelector, modeState } from "../../atoms/mode";
import styles from "./menu.module.scss";
const Menu = () => {
  const [, setMode] = useRecoilState(modeState);
  const isBrowseMode = useRecoilValue(isBrowseModeSelector);
  return (
    <nav className={styles.nav}>
      <button
        onClick={() => setMode("browse")}
        className={classNames({ [styles.active]: isBrowseMode })}
      >
        browse
      </button>
      <button
        onClick={() => setMode("pick")}
        className={classNames({ [styles.active]: !isBrowseMode })}
      >
        pick a <span>character</span>
      </button>
    </nav>
  );
};

export default Menu;
