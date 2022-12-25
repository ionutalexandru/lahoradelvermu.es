import Play from "./Play"
import Pause from "./Pause"
import { useState } from "react"

export default function AudioPlayer({
    author='La hora del vermú',
    title='El vermú sabanero',
}) {
    const [isPaying, setIsPlaying] = useState(false)

    return (
        <div className={`w-100 p-2 bg-white bg-opacity-30 backdrop-blur-lg rounded drop-shadow-xl`}>
            <div className={`flex flex-row gap-2`}>
                <div className={`w-100 lg:w-4/12 overflow-hidden rounded`}>
                    <img className="w-100 transition-all duration-500 object-cover grayscale hover:grayscale-0 hover:scale-110" src="/img/AudioCover.jpeg" height="auto" />
                </div>
                <div className={`flex flex-col`}>
                    <div className={`text-sm`}>{author}</div>
                    <div className={`text-xl font-bold`}>{title}</div>
                    <div className={`my-4`}>
                        {isPaying
                            ? <Pause onClick={() => setIsPlaying(false)} />
                            : <Play onClick={() => setIsPlaying(true)} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}