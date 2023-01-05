import React from "react"


export default function Body(props){
    return (
        <div>
           <div className="dynamicPart"> 
           <span>
           
           <img className="productImg" src={props.img}/>
           </span>
           <span>
           <h3>{props.title}</h3>
           <p>Description: {props.description} </p>
           <p>Location: {props.location}</p>
            <a href={props.map}>View on Google map</a>
             <p>Start date: {props.sDate}</p>
              <p>End date: {props.eDate}</p>
              </span>
           </div>
        </div>
    )
}