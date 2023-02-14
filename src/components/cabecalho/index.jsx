import styles from "./styles.module.css";
import CabecalhoLink from "./../cabecalhoLink/index";
import { Link } from "react-router-dom";

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src="logo.png" alt="Logo" />
      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./favorite">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
};

export default Cabecalho;
