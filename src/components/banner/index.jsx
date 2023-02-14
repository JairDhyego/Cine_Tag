import styles from "./styles.module.css";

const Banner = ({ imagem }) => {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url("/banner-${imagem}.png")` }}
    ></div>
  );
};

export default Banner;
