import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading] = useAuthState(auth);
 
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?buyer=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }
  const handleDelete = (id) => {
    if (user) {
      fetch(`http://localhost:5000/delete-order/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            toast.error('Delete successfully')
          }
        });

    }
  }
  return (
    <div>
      <p className="text-lg">Your Orders: {orders?.length}</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-primary"></th>
              <th className="text-primary">Name</th>
              <th className="text-primary">Parts</th>
              <th className="text-primary">price</th>
              <th className="text-primary">Pcs</th>
              <th className="text-primary">Cancel</th>
              <th className="text-primary">Paymant</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={i}>
                <td className="text-primary"></td>
                <td className="text-primary">{order.buyerMail}</td>
                <td className="text-primary">{order.part}</td>
                <td className="text-primary">{order.pPrice}</td>
                <td className="text-primary">{order.orderPcs}</td>
                <td className="text-primary">
                  {order.pPrice && !order.paid && (
                    <button onClick={() =>handleDelete(order._id)} className="btn btn-sm btn-error">Cancel</button>
                  )}
                </td>
                <td className="text-primary">
                  {order.pPrice && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`} className="btn btn-sm btn-success">Pay Now</Link>
                  )}
                  {order.pPrice && order.paid && (
                    <span className="text-success">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;



