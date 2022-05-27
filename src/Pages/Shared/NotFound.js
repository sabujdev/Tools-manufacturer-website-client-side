import React from 'react';
import notFound from '../../assets/Notfound.png'

const NotFound = () => {
    return (
        <div>
        <img style={{width:'100%'}} src={notFound} alt="404" />
    </div>
    );
};

export default NotFound;