import styles from "./styles.module.css";
import { userFavoritoContext } from "./../../contexts/Favorito";
import { Link } from "react-router-dom";

const Card = ({ id, titulo, capa }) => {
  const { favorito, adicionarFavorito } = userFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const iconeColor = !ehFavorito ? "#000" : "#ff0011";

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>

      <span
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
        style={{ color: iconeColor }}
      >
        Favorito
      </span>
    </div>
  );
};

export default Card;
