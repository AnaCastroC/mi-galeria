import React from "react";
import './Card.css'


const Card = ({url, title, description}) => {   
    return (
    <div className="d-flex justify-content-center">
        <div className='card m-3'>
            <img className='imgcss' src={url} alt={title}/>
            <h3>{title}</h3>
            <p className='m-2' >{description}</p>
        </div>
    </div>
    );
}

export default Card;