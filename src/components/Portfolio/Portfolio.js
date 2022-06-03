import React from 'react';
import { Link } from 'react-router-dom';
import Sabuj from '../../assets/sabuj.jpg';


const Portfolio = () => {
    return (
        <div className="card w-full mb-30 md:w-1/2 bg-base-100  my-24 md:px-24">
            <figure style={{'alignItems':'start', 'justifyContent':'start'}} className="pt-10 ">
                <img src={Sabuj} alt="" className="rounded-xl w-24 md:w-48" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Sabuj Mahonto</h2>
                <h2 className="card-title">Junior Web Developer</h2>
                <p>sabujmahonto@gmail.com</p>
                <p>Bachelor of Computer Science & Engineering </p>
                <h3 className="text-xl mt-6 font-bold">Skills </h3>
                <div className="card-actions ">
                    <ul>
                        <li>html, css3, bootstrap, tailwind</li>
                        <li>JavaScript</li>
                        <li>React Js</li>
                        <li>Firebase</li>
                        <li>Node Js</li>
                        <li>MongoDB</li>
                        <li>Payment Gatway</li>

                    </ul>
                </div>
                <h3 className="text-xl mt-6 font-bold">My 3 Best Project </h3>
                <div className="card-actions ">
                    <ul className='text-primary'>
                        <li>
                            <Link to={''}>Furniture Link</Link>
                        </li>
                        <li>
                            <Link to={''}>Todo app</Link>
                        </li>
                        <li>
                            <Link to={''}>Tooth Care</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;