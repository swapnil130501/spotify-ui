import { ProfileBanner } from "../components/atoms/ProfileBanner"
import { GradientWrapper } from "../components/molecules/GradientWrapper"

export const Home = () => {

    const artists = [
        { id: 1, name: "The Weeknd", image: "https://robohash.org/weeknd" },
        { id: 2, name: "Kendrick Lamar", image: "https://robohash.org/artist2" },
        {
            id: 3,
            name: "Future",
            image: "https://robohash.org/artist3"
        }
    ]

    return (
        <GradientWrapper>
            <ProfileBanner />

            <div className="py-12">
                <div className="text-white px-10">
                    <div className="mb-10">
                        <h2 className='text-2xl font-bold'>
                            Top artist this month
                        </h2>

                        <p className="text-md">
                            Based on your listening
                        </p>
                    </div>
                    
                    <div className="flex">
                        {artists.map((it) => (
                            <div key={it.id} className="px-2 w-1/5"> 

                                <div className="p-4 rounded-lg bg-gray-900">
                                    <img src={it.image} className="w-full h-auto rounded-full"/>

                                    <div className="mt-4">
                                        <h3 className="text-lg">
                                            {it.name}
                                            <p className="text-xs">
                                                Artist
                                            </p>
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        </GradientWrapper>
    )
}