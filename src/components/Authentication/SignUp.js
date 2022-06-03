import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../Firebase/Firebase.init';
import useToken from '../Hooks/useToken';
import Loading from '../Loading/Loading';

const Signup = () => {
  const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const [
      createUserWithEmailAndPassword,
      ,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
  
    const [token] = useToken(user);
  
    const handleRegister = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      if (password === confirmPassword) {
        createUserWithEmailAndPassword(email, password);
        sendEmailVerification();
        toast.success("Verification Email Sent !");
      } else {
        toast.error("Password Not Match");
      }
    }
    
    if (token) {
      navigate(from, { replace: true });
    }
    if (loading) {
      <Loading />
  }
  
  let errorMsg = '';
  if (error) {
      errorMsg = <p>Error: {error?.message}</p>;
    }
    return (
        <div className="card lg:card-side bg-base-100 lg:mx-36 mt-10">
        <figure><img className='hidden lg:block' src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="Album" /></figure>
        <div className="card-body">
        <div>
    <h2 className="text-3xl mt-10 mb-5 text-primary text-center">Register Form</h2>

    <form className="register-form" onSubmit={handleRegister}>
      <input className="ring-1 rounded-lg ring-primary-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto" type="text" name="name" id="" placeholder="your name" required />

      <input className="ring-1 rounded-lg ring-primary-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto" type="email" name="email" id="" placeholder="email" required />

        <input
          className="ring-1 rounded-lg ring-primary-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto"
        type="password"
        name="password"
        id=""
        placeholder="password"
        required
            />
        <input
          className="ring-1 rounded-lg ring-primary-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto"
        type="password"
        name="confirmPassword"
        id=""
        placeholder="Confirm Password"
        required
            />
              <p className="transformer text-center">Already Have an account? <Link to="/signIn" className="text-primary underline mb-2">Please Login</Link></p>
              
              <p className="text-red-500 text-center">{errorMsg}</p>

     <input type='submit' value='sign up' className="ring-1 rounded-lg ring-primary-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto hover:bg-primary hover:text-white mt-5" />
      </form>
  </div>
        </div>
      </div>
    );
};

export default Signup;