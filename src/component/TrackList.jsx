import { useMusicPlayer } from "../hooks/useMusicPlayer";

const TrackList = () => {
  const music = useMusicPlayer();

  return (
    <>
      {music.trackList.map((track, index) => (
        <div key={`${track.name}_${index}`}>
          <button onClick={() => music.playTrack(index)}>
            {music.isPlaying && music.currentTrackIndex === index ? (
               "Pause" 
               ) : (
              <span className="material-icons-outlined">play_arrow</span>
               )}
          </button>
          <div>Track Playing: {track.name}</div>
        </div>
      ))}
    </>
  );
};
 
export { TrackList };
 