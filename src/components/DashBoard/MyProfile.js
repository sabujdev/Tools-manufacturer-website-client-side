import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user]= useAuthState(auth);
    return (
        <div>
            <img src={user.photoURL} alt="" />
            <h2>{user.displayName}</h2>
            <p>{user.email}</p>
        </div>
    );
};

export default MyProfile;