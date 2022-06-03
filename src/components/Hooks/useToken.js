import { useEffect, useState } from "react";

const useToken = user => {
    console.log(user?.email);
    const [token, setToken] = useState('');
    
    useEffect(() => {
        const email = user?.email;
        const mainUser = {email: email};
        if (email) {
            fetch(`https://sazzad795.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(mainUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                });
        }
    }, [user])
    return [token];
}
export default useToken;