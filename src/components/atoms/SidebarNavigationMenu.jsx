import { MdHome, MdLibraryMusic, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

export const SidebarNavigationMenu = () => {
    const navigationMenu = [
        {
            name: "Home",
            icon: MdHome,
            route: "/"
        },
        {
            name: "Search",
            icon: MdSearch,
            route: "/search"
        },
        {
            name: "Your Library",
            icon: MdLibraryMusic,
            route: "/library"
        }
    ];

    return (
        <div className="mb-5">
            <ul className="space-y-2">
                {navigationMenu.map((it) => (
                    <li key={it.name} className="text-lg px-5">
                        <Link to={it.route} className="flex items-center space-x-4">
                            <it.icon className="text-white" size={24} />
                            <span>{it.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}