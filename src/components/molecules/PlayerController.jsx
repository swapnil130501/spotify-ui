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
        },
        {
            id: 2,
            name: "Song 2",
            artist: {
                name: "Artist 2",
                image: "https://robohash.org/artist2"
            },
        }
    ]

    return (
        <div className="text-white">
            <div
                className="flex justify-center items-center space-x-4 py-4 text-gray-400"
            >
                <button>
                    <MdShuffle />
                </button>

                <button
                    className="text-2xl"
                >
                    <MdSkipPrevious />
                </button>

                <button
                    className="text-4xl text-white"
                >
                    <MdOutlinePauseCircleFilled />
                </button>

                <button
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
        </div>
    )
}