import React from "react";
import styles from "./styles.module.css";

const NaoEncontrado = () => {
  return (
    <section className={styles.container}>
      <h2>Ops!</h2>
      <p>O Conteúdo que você procura não foi encontrado!</p>
    </section>
  );
};

export default NaoEncontrado;
