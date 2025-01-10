export const GradientWrapper = ({ children }) => {
    return (
        <div className={`h-full overflow-y-auto bg-gradient-to-b from-indigo-800 via-indigo-900 to-black`}>
            {children}
        </div>
    )
}