import { useMusicPlayer } from "../hooks/useMusicPlayer";

const TrackList = () => {
  const music = useMusicPlayer();
  return (
    <div>
      {music.trackList.map((track, index) => (
        <div key={`${track.name}_${index}`}>
          <button onClick={() => music.playTrack(index)}>
            {music.isPlaying && music.currentTrackIndex === index
              ? "Pause"
              : "Play"}
          </button>
          <div>Track Playing: {track.name}</div>
        </div>
      ))}
    </div>
  );
};
 
export { TrackList };
 