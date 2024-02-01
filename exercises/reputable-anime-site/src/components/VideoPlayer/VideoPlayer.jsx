const VideoPlayer = ({videoSrc}) => {

    return (
        <iframe className="w-full aspect-video" src={videoSrc} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" allowFullScreen>
        </iframe>
    )
}

export default VideoPlayer