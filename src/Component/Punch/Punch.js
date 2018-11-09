import React from 'react';

const Punch = (props) =>console.log(props.index)|| (
    <div key={props.index}>
        <h4>Date: {props.punch.punch_date}</h4>
        <h4>Day: {props.punch.punch_day}</h4>
        <h4>Time: {props.punch.punch_time}</h4>
        <h4>Punch Type: {props.punch.punch_type}</h4>
        <button onClick={() =>props.handleDelete(props.index)}>Delete</button>
    </div>
);

export default Punch;