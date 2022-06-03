import React from "react";
import { Link } from "react-router-dom";

const WeAreLookingFor = () => {
  return (
    <div className="mb-10 lg:mx-10 bg-base-100 shadow-xl rounded-xl">
      <div class="hero h-screen lg:h-[60vh] ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://www.globaltrailermag.com/wp-content/uploads/2020/07/gt-news-mercedes-aero-lge.jpg" alt=''
            className="max-w-sm rounded-lg shadow-2xl flex-1"
          />
          <div className="flex-1">
            <h1 class="text-5xl font-bold text-sky-400"> WE ARE LOOKING FOOR</h1>
            <p class="py-6">
            We are currently using outsourced courier service. In the near future we are working on launching our own courier system. We hope that will solve many problems of our customers and they will be able to import parts from our manufacture with confidence.  We are working hopefully this will be of great benefit to us both internally and externally
            </p>
            <Link to='/signUp' class="btn btn-primary">Sign Up Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreLookingFor;
