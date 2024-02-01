import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import { FaClosedCaptioning, FaMicrophone } from "react-icons/fa6";

const avaliableSubServices = ["GooseStreaming", "PandoraBox", "Apples"]
const avaliableDubServices = ["GooseStreaming", "PandoraBox"]

const VideoController = ({episodes}) => {
    const [episodeIdx, setEpisodeIdx] = useState(0)
    const [episodeType, setEpisodeType] = useState("GooseStreaming(Sub)")
    const selectedEpisode = episodes[episodeIdx]

    return (
    <>
      <div className='w-1/2'>
        <VideoPlayer videoSrc={selectedEpisode.src}/>
      </div>
      Hello World!
    </>
    )
}

export default VideoController