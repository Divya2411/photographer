import React from 'react';
import Tilt from 'react-tilt';


const Card = (props) => {
    return (
        <>
        <div className = "col-md-4 col-10">
        <Tilt className="Tilt" >
 

       <div class="card Tilt-inner" >
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.content}</p>
    <p className = "date">{props.date}</p>
  
  </div>
</div>
</Tilt>
</div>
        </>
    )
}

export default Card;