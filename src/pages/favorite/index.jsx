import styles from "./styles.module.css";
import Banner from "./../../components/banner";
import Title from "./../../components/title";
import Card from "./../../components/card";
import { userFavoritoContext } from "./../../contexts/Favorito";

const Favorite = () => {
  const { favorito } = userFavoritoContext();

  return (
    <>
      <Banner imagem="favoritos"></Banner>
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.container}>
        {favorito.map((fav) => (
          <Card {...fav} key={fav.id} />
        ))}
      </section>
    </>
  );
};

export default Favorite;
