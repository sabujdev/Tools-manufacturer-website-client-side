import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/Firebase.init";

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const name = user?.email.split("@")[0];

    const handleReview = (e) => {

        e.preventDefault();
        const reviews = {
            name: name,
            rating: e.target.rating.value,
            review: e.target.review.value,
        };
      // console.log(reviews);    
      
      fetch('https://manufacturer-website-app.herokuapp.com/rating',{
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(reviews)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            toast.success('review added successfully')
          }
        });
  
    }
   

  return (
    <div>
      <form
        onSubmit={handleReview}
        className="border-2 border-primary rounded lg: w-2/6 mx-auto"
      >
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            name="rating"
            placeholder="4.5"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Your Review</span>
          </label>
          <input
            type="text"
            name="review"
            placeholder="message"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="flex justify-center mb-5">
          <button className="btn btn-primary mx-auto mt-7">Post Your Review</button>
        </div>
      </form>
    </div>
  );
};

export default AddAReview;
