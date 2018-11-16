import React from 'react';
import '../../App.css'

const Punch = (props) => (
    <div key={props.index} className='punch'>
        <h4>{props.punch.punch_type}</h4>
        <h4>Date: {props.punch.punch_date}</h4>
        <h4>Day: {props.punch.punch_day}</h4>
        <h4>Time: {props.punch.punch_time}</h4>
        <button props={props.punch.id} onClick={() => window.location = `/#/editpunch/${props.punch.id}`} className='editButton'>Edit</button>
        <button onClick={() => props.handleDelete(props.id)} className='deleteButton'>Delete</button>
    </div>
);

export default Punch;