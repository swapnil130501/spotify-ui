import { useEffect, useRef, useState } from "react";
import ReactHowler from "react-howler";
import Audio1 from '../../assets/1.mp3';
import Audio2 from '../../assets/2.mp3';
import { formatTime } from "../../utils/timeFormatter"

import {
    MdShuffle,
    MdSkipNext,
    MdSkipPrevious,
    MdOutlinePlayCircleFilled,
    MdOutlinePauseCircleFilled,
    MdOutlineRepeat

} from "react-icons/md";


export const PlayerController = () => {
    const songs = [
        {
            id: 1,
            name: "Song 1",
            artist: {
                name: "Artist 1",
                image: "https://robohash.org/artist1"
            },
            url: Audio1
        },
        {
            id: 2,
            name: "Song 2",
            artist: {
                name: "Artist 2",
                image: "https://robohash.org/artist2"
            },
            url: Audio2
        }
    ]

    const soundRef = useRef(null);

    const [playerState, setPlayerState] = useState({
        playing: true,
        index: 0,
        seek: 0.0,
        isSeeking: false,
        repeat: false,
        shuffle: false,
        duration: 0.0
    });

    function nextSong() {
        if(playerState.shuffle) {
            const randomIndex = Math.floor(Math.random() * songs.length);
            setPlayerState({
                ...playerState,
                index: (randomIndex === playerState.index) ? (randomIndex + 1) %  songs.length : randomIndex,
                playing: true
            })
        }

        else {
            setPlayerState({
                ...playerState,
                index: (playerState.index + 1) % songs.length,
                playing: true
            })
        }
    }

    function prevSong() {
        if(playerState.shuffle) {
            const randomIndex = Math.floor(Math.random() * songs.length);
            setPlayerState({
                ...playerState,
                index: (randomIndex === playerState.index) ? (randomIndex + 1) %  songs.length : randomIndex,
                playing: true
            })
        }

        else {
            setPlayerState({
                ...playerState,
                index: (playerState.index - 1 + songs.length) % songs.length,
                playing: true
            })
        }
    }

    function toggleShuffle() {
        setPlayerState({
            ...playerState,
            shuffle: !playerState.shuffle
        })
    }

    function handleSeek(e) {
        console.log(e.target.value);
        const value = parseFloat(e.target.value);
        setPlayerState({
            ...playerState,
            seek: value
        })
        soundRef.current.seek(value);
    }

    function handleSongLoad() {
        setPlayerState({
            ...playerState,
            duration: soundRef.current.duration()
        })
    }

    useEffect(() => {
        let id;
        if(playerState.playing && !playerState.isSeeking) {
            const updateSeek = () => {
                setPlayerState({
                    ...playerState,
                    seek: soundRef.current.seek()
                });
                id = requestAnimationFrame(updateSeek);
            }

            id = requestAnimationFrame(updateSeek);
            return () => {
                cancelAnimationFrame(id);
            }
        }
        cancelAnimationFrame(id);
    }, [playerState.isSeeking, playerState.playing]);

    return (
        <div className="text-white">
            <ReactHowler 
                ref={soundRef}
                src={songs[playerState.index].url}
                playing={playerState.playing}
                onLoad={handleSongLoad}
            />
            <div
                className="flex justify-center items-center space-x-4 py-4 text-gray-400"
            >
                <button
                    onClick={toggleShuffle}
                >
                    <MdShuffle />
                </button>

                <button
                    onClick={prevSong}
                    className="text-2xl"
                >
                    <MdSkipPrevious />
                </button>

                {
                    playerState.playing ? (
                        <button
                            onClick={() => setPlayerState({...playerState, playing: false})}
                            className="text-4xl text-white"
                        >
                            <MdOutlinePauseCircleFilled />
                        </button>) : 
                        (
                        <button
                            onClick={() => setPlayerState({...playerState, playing: true})}
                            className="text-4xl text-white"
                        >
                            <MdOutlinePlayCircleFilled />
                        </button>
                        )
                }

                <button
                    onClick={nextSong}
                    className="text-2xl"
                >
                    <MdSkipNext />
                </button>
                
                <button
                    className="text-xl text-white"
                >
                    <MdOutlineRepeat />
                </button>

            </div>
            {/* progress bar ui*/}

            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 px-4">
                <div className="w-10 text-right">
                    {formatTime(playerState.seek)}
                </div>
                <input 
                    type="range"
                    className="w-full bg-gray-800 accent-gray-600"
                    min={"0"}
                    value={playerState.seek}
                    max={playerState.duration || 0}
                    step="0.1"
                    onChange={handleSeek}
                    onMouseDown={() => { setPlayerState({ ...playerState, isSeeking: true }) }}
                    onMouseUp={() => { setPlayerState({ ...playerState, isSeeking: false }) }}
                />

                <div className="w-10 text-left">
                    {formatTime(playerState.duration)}
                </div>
            </div>
        </div>
    )
}