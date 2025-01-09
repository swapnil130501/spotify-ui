import { useState } from "react"
import { SidebarPlaylistItem } from "../atoms/SidebarPlaylistItem";

export const SidebarPlaylist = () => {
    const [playlists, setPlaylists] = useState([
        {name: "Hindi Mix"},
        {name: "Metal"},
        {name: "Hip Hop"}
    ]);

    return (
        <div className="py-5 h-2/3 overflow-y-auto">
            <ul className="space-y-2">
                {playlists.map((it) => (
                    <SidebarPlaylistItem key={it.name} name={it.name}/>
                ))}
            </ul>
        </div>
    );
}