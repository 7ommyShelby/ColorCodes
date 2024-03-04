import React from 'react'
import './card.css'


const Card = (props) => {
    return (
        <div className='card'>
            <div className="col" style={{
                backgroundColor: props.bgcol
            }}>
            </div>
            <div className="detail">
                <h4>{props.hexcode}</h4>
                <p style={{
                        color : props.bgcol  
                }}>{props.det}</p>
            </div>
        </div>
    )
}

export default Card
