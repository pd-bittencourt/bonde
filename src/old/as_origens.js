import { useEffect, useState } from "react";
import Link from "next/link";

import Container from "./styles";
import ArrowLeft from "../../components/ui/ArrowLeft";

function Movie2() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data[1];
        setMovie(filtered);
      });
  }, []);

  return (
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
          backgroundImage: `linear-gradient(to bottom, #0000, #0009), url(${movie.image})`,
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
          <h2>Ficha Técnica</h2>

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
          {movie.screenwriter && (
            <>
              <p className="details-title">Roteiro</p>
              <p className="crew-details">{movie.screenwriter}</p>
            </>
          )}
          {movie.executive_producer && (
            <>
              <p className="details-title">Produtor executivo</p>
              <p className="crew-details">{movie.executive_producer}</p>
            </>
          )}
          {movie.producer && (
            <>
              <p className="details-title">Produção</p>
              <p className="crew-details">{movie.producer}</p>
            </>
          )}
          {movie.associate_producer && (
            <>
              <p className="details-title">Produtora Associada</p>
              <p className="crew-details">{movie.associate_producer}</p>
            </>
          )}
          {movie.impact_producer && (
            <>
              <p className="details-title">Produção de Impacto</p>
              <p className="crew-details">{movie.impact_producer}</p>
            </>
          )}
          {movie.impact_producer && (
            <>
              <p className="details-title">Estrategista de Impacto</p>
              <p className="crew-details">
                {movie.impact_strategist.join(", ")}
              </p>
            </>
          )}
          {movie.photographer && (
            <>
              <p className="details-title">Direção de fotografia </p>
              <p className="crew-details">{movie.photographer}</p>
            </>
          )}

          {movie.editing && (
            <>
              <p className="details-title">Montagem</p>
              <p className="crew-details">{movie.editing}</p>
            </>
          )}
          {movie.ilustrations && (
            <>
              <p className="details-title">Ilustrações</p>
              <p className="crew-details">{movie.ilustrations}</p>
            </>
          )}
          {movie.music && (
            <>
              <p className="details-title">Trilha Sonora</p>
              <p className="crew-details">{movie.music}</p>
            </>
          )}
          {movie.collor_correction && (
            <>
              <p className="details-title">Finalização de Imagem</p>
              <p className="crew-details">{movie.collor_correction}</p>
            </>
          )}
          {movie.sound_design && (
            <>
              <p className="details-title">Finalização de Som</p>
              <p className="crew-details">{movie.sound_design}</p>
            </>
          )}

          {movie.productions_companies && (
            <>
              <p className="details-title">Coprodução</p>
              <p className="crew-details">
                {movie.productions_companies.join(", ")}
              </p>
            </>
          )}
          {movie.coproduction && (
            <>
              <p className="details-title">Coprodução</p>
              <p className="crew-details">{movie.coproduction}</p>
            </>
          )}
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
  );
}

export default Movie2;
