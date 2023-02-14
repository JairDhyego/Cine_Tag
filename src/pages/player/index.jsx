import Banner from "../../components/banner";
import styles from "./styles.module.css";
import Title from "./../../components/title";
import NaoEncontrado from "../NaoEcontrado";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Player = () => {
  const params = useParams();
  const [video, setVideo] = useState();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/JairDhyego/cineTag-api/videos?id=${params.id}`
    )
      .then((res) => res.json())
      .then((dados) => {
        setVideo(...dados);
      });
  }, []);

  if (!video) {
    return <NaoEncontrado />;
  }

  return (
    <div>
      <Banner imagem="player"></Banner>
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
};

export default Player;
