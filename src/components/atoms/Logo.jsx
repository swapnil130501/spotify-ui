import LogoImage from '../../assets/logo.png';

export const Logo = ({
    width,
    height
}) => {
    return (
        <div className="w-32 px-5 mb-5">
            <img src={LogoImage} alt="logo" className={`w-${width} h-${height}`}/>
        </div>
    )
}