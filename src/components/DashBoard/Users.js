import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>All Users{users?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>User id</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
                      {users?.map((user) => <UserRow key={user._id} user={user} refetch={refetch}/>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
