import React from "react" 
import jeremy from './images/image-jeremy.png'

export default function Person(props) {

  const buttonRef = React.useRef(null)
  React.useEffect(() => buttonRef.current.click(), [])

    return (
        <div className="grid-item person">
          <div className="jeremy">
            <img className="headshot" src={jeremy} alt="Jeremy headshot" />
            <div>
              <p>report for</p>
              <h1>Jeremy <span className="last">Robson</span></h1>
            </div>
          </div>
          <div className="bottom">  
            <button value="daily" ref={buttonRef} onClick={props.renderDaily}>daily</button> 
            <button value="weekly" onClick={props.renderWeekly}>weekly</button>
            <button value="monthly" onClick={props.renderMonthly}>monthly</button>
          </div>
      </div>
    )
}
