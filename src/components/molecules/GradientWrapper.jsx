export const GradientWrapper = ({ fromColor = 'indigo-800', viaColor = 'indigo-900', toColor='black', children }) => {
    return (
        <div className={`h-full overflow-y-auto bg-gradient-to-b from-${fromColor} via-${viaColor} to-${toColor}`}>
            {children}
        </div>
    )
}