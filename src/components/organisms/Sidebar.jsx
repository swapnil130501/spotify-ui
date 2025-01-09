import { Logo } from "../atoms/Logo"

export const Sidebar = () => {
    return (
        <div className="w-full bg-black px-2 text-gray-400 h-[calc(100vh-100px)]">

            <div className="h-full py-5">
                <Logo width={16} height={16}/>
            </div>
        </div>
    )
}