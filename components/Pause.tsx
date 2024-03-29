export default function Pause({
    onClick = () => console.log('Pausing'),
    className='',
    iconClassName='h-6 w-6',
}) {
    return (
        <button className={className} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClassName}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
        </button>
    )
}