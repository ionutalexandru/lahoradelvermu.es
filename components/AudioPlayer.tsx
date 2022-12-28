import Play from "./Play"
import Pause from "./Pause"
import { useState, useRef, useEffect, useMemo, CSSProperties } from "react"
import Image from 'next/image'

const startTimer = (intervalRef : any, audioRef : any, setProgress : any) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
        setProgress(audioRef.current?.currentTime || 0)
    }, 1000)
}

export default function AudioPlayer({
    author='La hora del vermú',
    title='El vermú savanero',
    audioSrc='/El vermú savanero.mp3'
}) {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [progress, setProgress] = useState<number>(0)
    const intervalRef = useRef<NodeJS.Timer | undefined>()

    const duration = audioRef.current?.duration || 0
    const progressPercentage = duration ? progress / duration * 100 : 0

    const onPlayPause = () => {
        setIsPlaying(playing => !playing)
    }


    const onScrub = (value : string) => {
        if (!audioRef.current) return
        const val = Number(value)
        clearInterval(intervalRef.current)
        audioRef.current.currentTime = val
        setProgress(val)
    }

    const onScrubEnd = () => {
        if (!isPlaying) {
            setIsPlaying(true)
        }
        startTimer(intervalRef, audioRef, setProgress)
    }

    useEffect(() => {
        audioRef.current = new Audio(audioSrc)
        audioRef.current.load()
        startTimer(intervalRef, audioRef, setProgress)
    }, [audioSrc])
    
    useEffect(() => {
        if (!audioRef.current) return
        audioRef.current.addEventListener('ended', () => setIsPlaying(false))
        return (() => {
            audioRef.current?.removeEventListener('ended', () => setIsPlaying(false))
        })
    }, [])

    useEffect(() => {
        if (!audioRef.current) {
            return
        }
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }

    }, [isPlaying])

    return (
        <div className={`w-100 backdrop-blur-sm bg-white/30 rounded`}>
            <div className={`w-100 p-3 flex flex-col justify-content-center items-center gap-2`}>
                <div className={`w-48 h-48 rounded-full overflow-hidden`}>
                    <Image className="w-48 h-48 transition-all duration-500 object-cover grayscale hover:grayscale-0 hover:scale-110" src="/img/AudioCover.jpeg" alt="Audio Cover" width="240" height="240" />
                </div>
                <div className={`text-sm`}>{author}</div>
                <div className={`text-xl font-bold`}>{title}</div>
                <div className={`my-4 w-full flex items-center`}>
                    <>
                        {isPlaying
                            ? <Pause onClick={onPlayPause} className={`mr-2`} iconClassName={`h-8 w-8`} />
                            : <Play onClick={onPlayPause} className={`mr-2`} iconClassName={`h-8 w-8`} />
                        }
                    </>
                    <input
                        type="range"
                        min={0}
                        max={audioRef.current?.duration}
                        step={1}
                        value={progress}
                        onChange={(e) => onScrub(e.target.value)}
                        onMouseUp={onScrubEnd}
                        onKeyUp={onScrubEnd}
                        className="audio-player-progress grow h-2 appearance-none cursor-pointer bg-gradient-to-r from-white to-gray-400"
                        style={{
                            '--tw-gradient-stops': `var(--tw-gradient-from) 0% ${progressPercentage}%, var(--tw-gradient-to) ${progressPercentage}% 100%`
                        } as CSSProperties}
                    />
                </div>
            </div>
        </div>
    )
}