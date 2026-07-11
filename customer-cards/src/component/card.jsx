import React from 'react'
import {Info, CircleFadingPlus, Mail} from 'lucide-react'


const Card = (props) => {
    return(
        <div className="Card">
            <div className="top">
        <div>
          <img src={props.image}></img>
        </div>
        <div className="detail">
          <h4>{props.name}</h4>
          <span>{props.designation}</span>
          <div className="icons">
            <Info size={18}/>
            <Mail size={18}/>
            <CircleFadingPlus size={18}/>
          </div>
        </div>
      </div>

      <div className="bottom">
          <button>Followed</button>
          <button>unfollow</button>
      </div>
        </div>
    )
}

export default Card