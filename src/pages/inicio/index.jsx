import Banner from "./../../components/banner";
import Title from "./../../components/title";
import Card from "./../../components/card";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/JairDhyego/cineTag-api/videos")
      .then((res) => res.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Title>
      <section className={styles.container}>
        {videos ? (
          videos.map((video) => <Card {...video} key={video.id} />)
        ) : (
          <div>Carregando...</div>
        )}
      </section>
    </>
  );
};

export default Inicio;
