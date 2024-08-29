import { PlayArrow } from "@mui/icons-material";
import { useMusicPlayer } from "../hooks/useMusicPlayer"; 

const PlayerControls = () => {
    const music = useMusicPlayer();
    return (
        <>
        <div>
            <p>{music.currentTrackName}</p>
        </div>
        <button onClick={music.playPreviousTrack}>Previous </button>
        <button onClick={music.togglePlay}>{music.isPlaying ? "pause" : <PlayArrow /> }</button>
        <button onClick={music.playPreviousTrack}>Next </button>

        </>
    )
};
export { PlayerControls}