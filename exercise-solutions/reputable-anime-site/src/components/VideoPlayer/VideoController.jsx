import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import { FaClosedCaptioning, FaMicrophone } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";

const avaliableSubServices = ["GooseStreaming", "PandoraBox", "Apples"]
const avaliableDubServices = ["GooseStreaming", "PandoraBox"]

const VideoController = ({episodes}) => {
    const [episodeIdx, setEpisodeIdx] = useState(0)
    const [episodeType, setEpisodeType] = useState("GooseStreaming(Sub)")
    const selectedEpisode = episodes[episodeIdx]

    const episodeDiv = episodes.map((episode, i) => {
        const episodeNum = i+1;
        return (
        <div onClick={() => setEpisodeIdx(i)} key={episode.name} className={`group select-none hover:cursor-pointer align-center flex flex-row py-3 px-4 hover:bg-neutral-600 ${episodeNum % 2 ? "bg-neutral-800": "bg-neutral-900"}`}>
            <span className="w-10 text-stone-400 group-hover:text-neutral-200"><b>{episodeNum}</b></span>
            <span className="text-stone-400 group-hover:text-amber-300">{episode.name}</span>
            <div className="ml-auto">{selectedEpisode.name === episode.name ? '🙏': ''}</div>
        </div>
        )
    })

    const avaliableSubs = avaliableSubServices.map((service) => {
        return (
            <div onClick={() => setEpisodeType(service + " (Sub)")} className="rounded-md bg-neutral-600 hover px-3 py-2 text-stone-100 cursor-pointer">
                {service}
            </div>
        )
    })

    const avaliableDubs = avaliableDubServices.map((service) => {
        return (
            <div onClick={() => setEpisodeType(service + " (Dub)")} className="rounded-md bg-neutral-600 hover px-3 py-2 text-stone-100 cursor-pointer">
                {service}
            </div>
        )
    })

    return (
        <div className="flex flex-row bg-neutral-950">
            <div className="flex-col w-64 bg-neutral-900">
                <div className="bg-neutral-900 py-3 px-4 text-stone-200 text-sm">List of episodes:</div>
                {episodeDiv}
                <div className="flex-1"></div>
            </div>
            <div className="flex-col grow">
                <VideoPlayer videoSrc={selectedEpisode.src}/>
                <div className="p-6">
                    <div className="bg-neutral-800 rounded-3xl overflow-hidden flex flex-row">
                        <div className="bg-amber-200 text-black w-60 p-3 text-center">
                            <div>You are watching</div><b>Episode {episodeIdx + 1}</b><div>{episodeType}</div>
                            <div className="pt-2 text-sm">If current server doesn't work please try the other servers aside</div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className="bg-neutral-800 flex flex-row items-center p-4 gap-3">
                                <div className="w-20 flex flex-row items-center">
                                    <FaClosedCaptioning color="rgb(251 191 36)" size={"20px"}/>
                                    <div className="text-slate-50 ml-2"><b>SUB:</b></div>
                                </div>
                                {avaliableSubs}
                            </div>
                            <hr className="border-dashed border-neutral-400"></hr>
                            <div className="bg-neutral-800 flex flex-row items-center p-4 gap-3">
                                <div className="w-20 flex flex-row items-center">
                                    <FaMicrophone color="rgb(251 191 36)" size={"20px"}/>
                                    <div className="text-slate-50 ml-2"><b>DUB:</b></div>
                                </div>
                                {avaliableDubs}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    )
}

export default VideoController