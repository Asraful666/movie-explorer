import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        return response.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="movies-page">
        <h1>Explore Movies</h1>

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          className="search-input"
        />

        {loading && <p>Loading movies...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <div className="movie-grid">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetails={() =>
                  setSelectedMovie(movie)
                }
              />
            ))}
          </div>
        )}

        {!loading &&
          !error &&
          filteredMovies.length === 0 && (
            <p>No movies found.</p>
          )}

        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </main>
    </>
  );
}

export default Movies;