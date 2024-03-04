import React from 'react'
import data from './data.json'
import Card from './Card.js'
import './main.css'


const Main = () => {
    return (
        <div className='main'>
            {
                data.map((elem, idx) => {
                    return (
                        <Card bgcol={elem.hex}
                            hexcode={elem.hex}
                            det={elem.name}
                            key={idx}
                        />
                    )
                })
            }
        </div>
    )
}

export default Main
