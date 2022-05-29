import React from 'react';
// import expriance from '../../Assetes/icon/counter-1.png'
// import awards from '../../Assetes/icon/counter-2.png'
// import courntry from '../../Assetes/icon/counter-3.png'
// import partners from '../../Assetes/icon/counter-4.png'


const ExploreExperiance = () => {
    return (
        <div className='py-20 px-3 lg:px-24'>
            <div className="text-3xl lg:text-6xl text-center mb-16 text-primary font-extrabold">Explore Our Expariance</div>

            <div className='grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>


                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/* <img className='w-16 h-16 mx-auto' src={expriance} alt="" /> */}
                        <h2 className="text-center text-3xl font-bold ">25+</h2>
                        <p>Years Expriance</p>

                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/* <img className='w-16 h-16 mx-auto' src={awards} alt="" /> */}
                        <h2 className="text-3xl font-bold  text-center">456+</h2>
                        <p>Awards Winning</p>

                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/* <img className='w-16 h-16 mx-auto' src={partners} alt="" /> */}
                        <h2 className="text-3xl font-bold  text-center">87</h2>
                        <p>Busness Partners</p>

                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        {/* <img className='w-16 h-16 mx-auto' src={courntry} alt="" /> */}
                        <h2 className="text-3xl font-bold  text-center">28</h2>
                        <p>Country Export</p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default ExploreExperiance;