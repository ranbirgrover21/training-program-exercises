const Tags = ({rating, quality, episodes, runtime}) => {
    return (
        <>
            <div className="flex flex-row">
                <div>{rating}</div>
                <div>{quality}</div>
                <div>{episodes}</div>
                <div>{runtime}</div>
            </div>
        </>
    )
}

export default Tags