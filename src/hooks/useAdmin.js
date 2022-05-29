import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useAdmin = () => {
    const [user]= useAuthState(auth);
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        fetch(`https://manufacturer-website-app.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    return {
        admin
    }
};

export default useAdmin;