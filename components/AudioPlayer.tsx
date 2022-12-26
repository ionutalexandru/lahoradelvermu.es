import Play from "./Play"
import Pause from "./Pause"
import { useState, useRef, useEffect } from "react"


export default function AudioPlayer({
    author='La hora del vermú',
    title='El vermú savanero',
    audioSrc='/El vermú savanero.mp3'
}) {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [userHasInteracted, setUserHasInteracted] = useState<boolean>(false)

    useEffect(() => {
        audioRef.current = new Audio(audioSrc)
    }, [])
    
    useEffect(() => {
        if (!audioRef.current) return
        audioRef.current.addEventListener('ended', () => setIsPlaying(false))
        return (() => {
            audioRef.current?.removeEventListener('ended', () => setIsPlaying(false))
        })
    }, [audioRef.current])

    useEffect(() => {
        if (!audioRef.current || !userHasInteracted) {
            return
        }
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }

    }, [userHasInteracted, isPlaying, audioRef.current])

    return (
        <div className={`w-100 backdrop-blur-sm bg-white/30 rounded`}>
            <div className={`w-100 p-3 flex flex-col justify-content-center items-center gap-2`}>
                <div className={`w-48 h-48 rounded-full overflow-hidden`}>
                    <img className="w-48 h-48 transition-all duration-500 object-cover grayscale hover:grayscale-0 hover:scale-110" src="/img/AudioCover.jpeg" />
                </div>
                <div className={`text-sm`}>{author}</div>
                <div className={`text-xl font-bold`}>{title}</div>
                <div className={`my-4`}>
                    {isPlaying
                        ? <Pause onClick={() => setIsPlaying(false)} />
                        : <Play onClick={() => {
                            if (!userHasInteracted) {
                                setUserHasInteracted(true)
                            }
                            setIsPlaying(true)
                        }} />
                    }
                </div>
            </div>
        </div>
    )
}