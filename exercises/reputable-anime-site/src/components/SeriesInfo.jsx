import RatingCard from "./RatingCard"
import { useState } from "react"
import Tags from "./Tags"

const SeriesInfo = ({title, description, score}) => {
    const [showMore, setShowMore] = useState(false)
    // TODO Display the description and scores, make the description collapsable
    return (
        <div className="flex flex-col">
            <img src='/logh.jpg' className="w-64">
            </img>
            <div className="text-2xl">{title}</div>
        </div>
    )
}

export default SeriesInfo