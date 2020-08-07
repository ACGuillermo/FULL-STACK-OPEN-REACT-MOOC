import React from 'react'
import './Notification.css';


const Notification = ({notification}) => {
    if(notification===null) return null

    return (
        <div className={notification.type}>
            <h3>{notification.text}</h3>
        </div>
    )
}

export default Notification