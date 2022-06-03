import React from 'react';

const NotFound = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
      <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
        <div>
          <p className='mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase'>
            Error 404 ...
          </p>
          <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
            Oops! Page not found.
          </h1>
          <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
            You might have the wrong address.
          </p>
        </div>
        <div>
          <div className='w-full h-full bg-gray-200 rounded-lg'>
            <img
              src='https://i.pinimg.com/originals/e4/30/10/e430101033efff9a294eaafecbac846a.gif'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
    );
};

export default NotFound;