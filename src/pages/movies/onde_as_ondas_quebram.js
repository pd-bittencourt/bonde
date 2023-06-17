import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "./styles";
import ArrowLeft from "../../components/ui/ArrowLeft";

function Movie1() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then(res => res.json())
      .then(data => {
        const filtered = data[0];
        console.log(filtered);
        setMovie(filtered);
      });
  }, []);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <Container>
        <Link href={`/#${movie.slug}`}>
          <a>
            <ArrowLeft />
            <span>voltar</span>
          </a>
        </Link>
        <div
          className="hero"
          style={{
            backgroundImage: `linear-gradient(to bottom, #0000, #0009), url(${movie.image_hero})`,
          }}
        >
          <div>
            <h1>{movie.title}</h1>
            <p>
              {movie.genre} • {movie.lenght} min
            </p>
          </div>
        </div>

        <main>
          <div>
            <h2>Sinopse</h2>
            <p>{movie.overview}</p>
          </div>

          <div>
            <h2>Equipe</h2>

            {movie.host && (
              <>
                <p className="details-title">Apresentação e Roteiro</p>
                <p className="crew-details">{movie.host}</p>
              </>
            )}
            {movie.director && (
              <>
                <p className="details-title">Direção</p>
                <p className="crew-details">{movie.director}</p>
              </>
            )}
            {movie.producer && (
              <>
                <p className="details-title">Produção</p>
                <p className="crew-details">{movie.producer}</p>
              </>
            )}
            {movie.executive_producer && (
              <>
                <p className="details-title">Produção executiva</p>
                <p className="crew-details">{movie.executive_producer}</p>
              </>
            )}
            {movie.screenwriter && (
              <>
                <p className="details-title">Roteiro</p>
                <p className="crew-details">{movie.screenwriter}</p>
              </>
            )}
            {movie.editing && (
              <>
                <p className="details-title">Montagem</p>
                <p className="crew-details">{movie.editing}</p>
              </>
            )}

            {movie.director_of_photography && (
              <>
                <p className="details-title">Direção de fotografia</p>
                <p className="crew-details">{movie.director_of_photography}</p>
              </>
            )}
            {movie.music && (
              <>
                <p className="details-title">Trilha Sonora original</p>
                <p className="crew-details">{movie.music}</p>
              </>
            )}
            {movie.sound_mixing && (
              <>
                <p className="details-title">Mixagem e pós-produção de som</p>
                <p className="crew-details">{movie.sound_mixing}</p>
              </>
            )}
            {movie.coproduction && (
              <>
                <p className="details-title">Produção local</p>
                <p className="crew-details">{movie.coproduction}</p>
              </>
            )}

            {movie.design && (
              <>
                <p className="details-title">Design Gráfico</p>
                <p className="crew-details">{movie.design}</p>
              </>
            )}

            {/*  */}

            {movie.kintsugi && (
              <>
                <p className="details-title">Kintsugi</p>
                <p className="crew-details">{movie.kintsugi}</p>
              </>
            )}
            {movie.impact_strategy && (
              <>
                <p className="details-title">Estratégia de Impacto</p>
                <p className="crew-details">{movie.impact_strategy}</p>
              </>
            )}
            {movie.impact_production_distribution && (
              <>
                <p className="details-title">
                  Produção e Distribuição de Impacto
                </p>
                <p className="crew-details">
                  {movie.impact_production_distribution}
                </p>
              </>
            )}
            {movie.impact_production && (
              <>
                <p className="details-title">Produção de Impacto</p>
                <p className="crew-details">{movie.impact_production}</p>
              </>
            )}
            {movie.consultant && (
              <>
                <p className="details-title">Consultoria</p>
                <p className="crew-details">{movie.consultant}</p>
              </>
            )}
            {movie.drone && (
              <>
                <p className="details-title">Imagens aéreas</p>
                <p className="crew-details">{movie.drone}</p>
              </>
            )}

            {/* <h2>Equipe na plantação de café</h2>
            {movie.drone && (
              <>
                <p className="details-title">Imagens aéreas</p>
                <p className="crew-details">{movie.drone}</p>
              </>
            )} */}
          </div>
        </main>
        <footer>
          <Link href={`/#${movie.slug}`}>
            <a>
              <ArrowLeft />
              <span>voltar</span>
            </a>
          </Link>
        </footer>
      </Container>
    </motion.div>
  );
}

export default Movie1;
