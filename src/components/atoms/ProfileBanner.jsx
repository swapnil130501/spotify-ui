export const ProfileBanner = () => {
    return (
        <div className="bg-indigo-1000 p-10 flex items-end">
            <div p-5>
                <img 
                    src={'http://robohash.org/swapnil'}
                    className={`w-40 h-40 shadow-2xl rounded-full`}
                />
            </div>

            <div className="p-5 leading-10 text-white">
                <p className="text-xs font-bold uppercase">
                    Profile
                </p>

                <h1 className="text-6xl font-bold">
                    Swapnil
                </h1>

                <p className="text-xs">
                    Public Playlist
                </p>
            </div>
        </div>
    )
}