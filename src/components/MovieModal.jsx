function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={movie.image?.original}
          alt={movie.name}
        />

        <h2>{movie.name}</h2>

        <p>
          ⭐ Rating: {movie.rating?.average || "N/A"}
        </p>

        <p>
          📅 Release: {movie.premiered || "Unknown"}
        </p>

        <p>
          🎭 Genre:{" "}
          {movie.genres?.join(", ") || "N/A"}
        </p>

        <div
          dangerouslySetInnerHTML={{
            __html:
              movie.summary ||
              "No summary available.",
          }}
        />

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default MovieModal;