import React from "react" 

export default function Person(props) {

    return (
        <div className="grid-item person">
          <div className="jeremy">
            <img className="headshot" src='./images/image-jeremy.png' alt="Jeremy headshot" />
            <div>
              <p>report for</p>
              <h1>Jeremy <span className="last">Robson</span></h1>
            </div>
          </div>
          <div className="bottom">  
            <button value="daily" onClick={props.renderValues}>daily</button> 
            <button value="weekly" onClick={props.renderValues}>weekly</button>
            <button value="monthly" onClick={props.renderValues}>monthly</button>
          </div>
      </div>
    )
}
