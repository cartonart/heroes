import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useRecoilCallback } from "recoil";
import { Hero, heroesAtoms, heroesIds } from "../atoms/heroes";
import Header from "../components/header/header";
import HeroesList from "../components/heroes-list/heroes-list";
import Menu from "../components/menu/menu";
import { getCharacters } from "../services/character-helper";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      const hereosData: Hero[] = data.results;
      hereosData.forEach((hero, id) => {
        createHero(id, hero);
      });
    };

    fetchData();
  }, []);

  const createHero = useRecoilCallback(
    ({ set }) =>
      (id: number, data: Hero) => {
        set(heroesIds, (currVal) => [...currVal, id]);
        set(heroesAtoms(id), data);
      },
    []
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Justt Heroes App</title>
        <meta name="description" content="Justt Heroes App" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <Menu />
        <HeroesList />
      </main>
    </div>
  );
};

export default Home;
