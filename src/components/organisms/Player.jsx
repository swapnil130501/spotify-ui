import { PlayerController } from "../molecules/PlayerController"

export const Player = () => {
    return (
        <div className="bg-black text-white h-full flex items-center justify-center border-t border-green-900">
            <div className="bg-gray-900 w-screen">
                <div className="flex items-center">
                    <div className="p-5 w-1/2">
                        <p className="text-lg font-bold">After Hours</p>
                        <p className="text-sm text-gray-400">The Weeknd</p>
                    </div>

                    <div className="">
                        <PlayerController />
                    </div>
                </div>
            </div>
        </div>
    )
}