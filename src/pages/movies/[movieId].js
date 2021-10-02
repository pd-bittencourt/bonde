import Link from "next/link";
import Container from "./styles";
import ArrowLeft from "../../components/ui/ArrowLeft";

export const getStaticPaths = async () => {
  const res = await fetch("https://www.bondefilmes.com/movies.json");
  const data = await res.json();
  const paths = data.map((movie) => {
    return {
      params: { movieId: movie.id.toString() },
    };
  });

  return {
    paths, //indicates that no page needs be created at build time
    fallback: false, //indicates the type of fallback
  };
};

export const getStaticProps = async (context) => {
  const id = parseInt(context.params.movieId);
  const res = await fetch("https://www.bondefilmes.com/movies.json");
  const data = await res.json();
  const filteredData = data.filter((movie) => movie.id === id);

  return {
    props: { movie: filteredData },
  };
};

const ProductDetail = ({ movie }) => {
  const _movie = movie[0];

  return (
    <Container>
      <Link href={`/#${_movie.id}`}>
        <a>
          <ArrowLeft />
          <span>voltar</span>
        </a>
      </Link>
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, #0000, #0009), url(${_movie.image})`,
        }}
      >
        <div>
          <h1>{_movie.title}</h1>
          <p>
            {_movie.genre} • {_movie.lenght} min
          </p>
        </div>
      </div>

      <main>
        <div>
          <h2>Sinopse</h2>
          <p>{_movie.overview}</p>
        </div>

        <div>
          <h2>Ficha Técnica</h2>

          {_movie.host && (
            <>
              <p className="details-title">Apresentação e Roteiro</p>
              <p className="crew-details">{_movie.host}</p>
            </>
          )}
          {_movie.director && (
            <>
              <p className="details-title">Direção</p>
              <p className="crew-details">{_movie.director}</p>
            </>
          )}
          {_movie.screenwriter && (
            <>
              <p className="details-title">Roteiro</p>
              <p className="crew-details">{_movie.screenwriter}</p>
            </>
          )}
          {_movie.executive_producer && (
            <>
              <p className="details-title">Produtor executivo</p>
              <p className="crew-details">{_movie.executive_producer}</p>
            </>
          )}
          {_movie.producer && (
            <>
              <p className="details-title">Produção</p>
              <p className="crew-details">{_movie.producer}</p>
            </>
          )}
          {_movie.associate_producer && (
            <>
              <p className="details-title">Produtora Associada</p>
              <p className="crew-details">{_movie.associate_producer}</p>
            </>
          )}
          {_movie.impact_producer && (
            <>
              <p className="details-title">Produção de Impacto</p>
              <p className="crew-details">
                {_movie.impact_producer.join(", ")}
              </p>
            </>
          )}
          {_movie.impact_producer && (
            <>
              <p className="details-title">Estrategista de Impacto</p>
              <p className="crew-details">
                {_movie.impact_strategist.join(", ")}
              </p>
            </>
          )}
          {_movie.photographer && (
            <>
              <p className="details-title">Direção de fotografia </p>
              <p className="crew-details">{_movie.photographer}</p>
            </>
          )}

          {_movie.editing && (
            <>
              <p className="details-title">Montagem</p>
              <p className="crew-details">{_movie.editing}</p>
            </>
          )}
          {_movie.ilustrations && (
            <>
              <p className="details-title">Ilustrações</p>
              <p className="crew-details">{_movie.ilustrations}</p>
            </>
          )}
          {_movie.music && (
            <>
              <p className="details-title">Trilha Sonora</p>
              <p className="crew-details">{_movie.music}</p>
            </>
          )}
          {_movie.collor_correction && (
            <>
              <p className="details-title">Finalização de Imagem</p>
              <p className="crew-details">{_movie.collor_correction}</p>
            </>
          )}
          {_movie.sound_design && (
            <>
              <p className="details-title">Finalização de Som</p>
              <p className="crew-details">{_movie.sound_design}</p>
            </>
          )}

          {_movie.productions_companies && (
            <>
              <p className="details-title">Coprodução</p>
              <p className="crew-details">
                {_movie.productions_companies.join(", ")}
              </p>
            </>
          )}
          {_movie.coproduction && (
            <>
              <p className="details-title">Coprodução</p>
              <p className="crew-details">{_movie.coproduction}</p>
            </>
          )}
        </div>
      </main>
      <footer>
        <Link href={`/#${_movie.id}`}>
          <a>
            <ArrowLeft />
            <span>voltar</span>
          </a>
        </Link>
      </footer>
    </Container>
  );
};
export default ProductDetail;
