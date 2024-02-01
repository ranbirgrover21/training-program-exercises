import RatingCard from "./RatingCard"
import { useState } from "react"
import Tags from "./Tags"

const SeriesInfo = ({title, description, score}) => {
    const [showMore, setShowMore] = useState(false)
    return (
        <div className="flex flex-col">
            <img src='/logh.jpg' className="w-64">
            </img>
            <div className="text-2xl">{title}</div>
            <Tags />
            <div>
                {showMore ? description : `${description.substring(0,200)}... `}
                <br></br>
                <a className="hover:cursor-pointer whitespace-pre-line" onClick={() => setShowMore(!showMore)}>
                    <b>{showMore ? '- Show Less': '+ Show More'}</b>
                </a>
            </div>
            <RatingCard score={10}/> 
        </div>
    )
}

export default SeriesInfo