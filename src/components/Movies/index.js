import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "./styles";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <Container>
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            id={movie.slug}
            className="movie"
            style={{
              backgroundImage: `linear-gradient(to bottom, #0000, #0009), url(${movie.image})`,
            }}
          >
            <Link href={movie.link}>
              <a className="movie-content">
                <h2>{movie.title}</h2>
                <p>INFO</p>
              </a>
            </Link>
          </div>
        );
      })}
    </Container>
  );
}

export default Movies;
