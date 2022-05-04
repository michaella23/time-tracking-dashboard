import React from "react"
import ellipsis from "./images/icon-ellipsis.svg"

export default function Activity(props) {

    // need conditional rendering from daily, weekly, monthly, that can plug into the object notation
    const activityGrid = props.timeSpent.map(({title, image, timeframe}, index) => { // destructured 'activity' object
                                                // since it's destructured, I don't have the repetition of activity.title, activity.image, etc. in the code below
        return (
            <div className="grid-item" key={index}>
                <div className={title} key={title}> 
                    <img src={image} alt="activity icon"/>
                </div>
                <div className="card">
                    <div className="activity">
                        <p>{title}</p>
                        <img src={ellipsis} alt="ellipsis" />
                    </div>
                    <div className="time">
                        <h1 id="activity-time">{timeframe.current} hrs</h1>
                        <p className="previous"><span id="activity-previous">previous - </span><span>{timeframe.previous} hrs</span></p>
                    </div>
                </div>
            </div>
        )    
    })

    return (
        <>
            {activityGrid}
        </>
    )
}
