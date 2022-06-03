import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [profile, setProfile] = useState([]);
  const name = user?.email?.split("@")[0];
  // console.log(updateProfile);

  if (loading) {
    <Loading />;
  }
  if (user) {
    const email = user.email;
    fetch(`http://localhost:5000/users/${email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }
  const email = user?.email;
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const education = e.target.education.value;
    const location = e.target.location.value;
    const updatedProfile = { name, education, location };

    fetch(`http://localhost:5000/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("user update successfully");
      });
  };
  return (
    <div className="lg:flex lg:justify-around">
      <form onSubmit={handleUpdateUser} class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Update Profile</h2>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              class="input input-bordered input-sm w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              value={user?.email}
              disabled
              class="input input-bordered input-sm w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text">Education</span>
            </label>
            <input
              type="text"
              name="education"
              placeholder="BCS cader"
              class="input input-bordered input-sm w-full max-w-xs"
            />
            <label class="label">
              <span class="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Dhaka Bangladesh"
              class="input input-bordered input-sm w-full max-w-xs"
            />
          </div>
          <div>
            <input
              className="input input-bordered input-sm w-full max-w-xs mt-3 btn btn-primary"
              type="submit"
              value="UPDATE"
            />
          </div>
        </div>
      </form>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class=" text-2xl font-bold text-sky-400 text-center">Updated Profile</h2>
          <h2 class="text-xl font-semibold">Name: {profile.name || name}</h2>
          <p className="text-xl font-semibold">Email: {profile.email}</p>
          <p className="text-xl font-semibold">Education: {profile.education}</p>
          <p className="text-xl font-semibold">Location: {profile.location}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
