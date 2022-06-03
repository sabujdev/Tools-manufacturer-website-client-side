import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

const Reviews = () => {
  const { data: review, isLoading } = useQuery("review", () =>
    fetch("https://sazzad795.herokuapp.com/review", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mx-auto w-full">
      <h1 className="text-3xl text-primary text-center mt-10 font-bold mb-5">
        ALL REVIEWS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 ">
        {review?.map((r) => (
          <div className="" key={r._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-sky-400">{r.name}<small className="text-xs mt-2">review</small></h2>
                <p>{r.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
