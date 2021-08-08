import { useEffect, useState } from "react";
import Link from "next/link";

import { Container } from "./styles";
import ArrowLeft from "../ui/ArrowLeft";

function Movie() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.find((e) => (e.id = 1));
        console.log(filtered);
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
          {movie.producer && (
            <>
              <p className="details-title">Produção</p>
              <p className="crew-details">{movie.producer}</p>
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
              <p className="crew-details">{movie.impact_strategist}</p>
            </>
          )}
          {movie.photographer && (
            <>
              <p className="details-title">Direção de fotografia </p>
              <p className="crew-details">{movie.photographer}</p>
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

export default Movie;
