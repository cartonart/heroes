import styles from "./header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.bg}></div>
      <img src="/logo.svg" alt="Justt Logo" />
    </header>
  );
};

export default Header;
