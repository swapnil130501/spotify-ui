import Logo from '../../assets/logo.png';

export const Sidebar = () => {
    return (
        <div className="w-full bg-black px-2 text-gray-400 h-[calc(100vh-100px)]">

            <div className="h-full py-5">
                
                <div className="w-32 px-5 mb-5">
                    <img src={Logo} alt="logo" className="w-16 h-16"/>
                </div>
            </div>
        </div>
    )
}