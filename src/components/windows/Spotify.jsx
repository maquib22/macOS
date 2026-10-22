import MacWindow from "./MacWindow";

function Spotify({ onClose }) {
  return (
    <MacWindow onClose={onClose} title="Spotify" width="48vw" height="48vh">
      <div className="spotify-window">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1E4oJSdHZrVjxD?utm_source=generator&theme=0&si=1b0fd27a52454f62"
          title="Spotify playlist"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </MacWindow>
  );
}

export default Spotify