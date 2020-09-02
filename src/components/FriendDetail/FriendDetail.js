import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FriendDetail = () => {
    const { friendId} = useParams();
    const [friend,setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(response =>response.json())
        .then(data =>setFriend(data))
    },[])
    return (
        <div>
            <h1>This is a friend details.{friendId}</h1>
            <h4>Name:  {friend.name}</h4>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
        
        </div>
    );
};

export default FriendDetail;