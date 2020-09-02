import React from 'react';
import { Link } from 'react-router-dom';
const Friend = (props) => {
    const {name , email,id} = props.friend; 
    const friendStyle = {
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
    <h4><Link to={`/Friend/${id}`}><button>show details off{id}</button></Link> </h4>
        </div>
    );
};

export default Friend;