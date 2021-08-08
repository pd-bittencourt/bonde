import { Container } from "./styles";

// .movie1 {
//   background-image: url("/imgs/where_is_nihon-3.jpg");
// }

// .movie2 {
//   background-image: url("/imgs/as_origens_2.jpg");
// }

// .movie3 {
//   background-image: url("/imgs/where_is_nihon-3.jpg");
// }

// .movie4 {
//   background-image: url("/imgs/misericordia_1.jpg");
// }
const movies = [
  {
    title: "Onde é Nihon?",
    image: "/imgs/where_is_nihon-3.jpg",
  },
  {
    title: "As Origens",
    image: "/imgs/as_origens_2.jpg",
  },
  {
    title: "Álbum de Memórias",
    image: "/imgs/where_is_nihon-3.jpg",
  },
  {
    title: "Tiro de Misericórdia",
    image: "/imgs/misericordia_1.jpg",
  },
];

function Movies() {
  return (
    <Container>
      {movies.map((movie, index) => {
        return (
          <div
            key={index}
            className="movie"
            style={{ backgroundImage: `url(${movie.image})` }}
          >
            <a href="#0" className="movie-content">
              <h2>{movie.title}</h2>
              <p>INFO</p>
            </a>
          </div>
        );
      })}
    </Container>
  );
}

export default Movies;