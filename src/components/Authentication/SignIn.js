import React, { useEffect, useRef } from "react";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/Firebase.init";
import useToken from "../Hooks/useToken";
import Loading from "../Loading/Loading";

const Signin = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [token] = useToken(user?.user || gUser?.user);
  console.log(gUser?.user?.email);
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  
  useEffect(() => {
    if (error || gError) {
      toast("Incorrect Login Details");
    }
  }, [error, gError]);

  if (loading || sending || gLoading) {
    return <Loading />;
  }


  

  
  let errorMsg = "";
  if (error || gError) {
    errorMsg = <p>Error: {error?.message || gError?.message}</p>;
      
    
  }
  

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  
  const navigateToSignUp = () => {
    navigate("/signUp");
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("check your email");
    } else {
      toast.error("please enter your email first");
    }
  };
  return (
    <div className="card lg:card-side bg-base-100 lg:mx-36">
      <figure>
        <img
          className="hidden lg:block"
          src="https://theupay.com/bank/Assets/login.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h1 className="text-3xl mt-10 mb-5 font-mono text-primary text-center">
          Login
        </h1>
        <form onSubmit={handleLogin} className="login-form">
          <input
            className="ring-1 rounded-lg ring-primary-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto"
            ref={emailRef}
            type="email"
            name="email"
            id=""
            placeholder="email address"
            required
          />
          <input
            className="ring-1 rounded-lg ring-primary-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto"
            ref={passwordRef}
            type="password"
            name="password"
            id=""
            placeholder="enter password"
            required
          />
          <input
            className="ring-1 rounded-lg ring-primary-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto hover:bg-primary cursor-pointer hover:text-white"
            type="submit"
            value="Login"
          />
          <p className="transformer text-center">
            New in this place?{" "}
            <Link
              to="/signup"
              className="text-primary underline"
              onClick={navigateToSignUp}
            >
              Please register
            </Link>{" "}
          </p>
          <p className="transformer text-center">
            forget password?{" "}
            <button
              className="resetPass text-rose-400 underline"
              onClick={handleResetPassword}
            >
              reset password
            </button>
          </p>
        </form>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <div>
      <div className="social-blog">
        <p className="text-red-500 text-center">{errorMsg}</p>
        <button
          onClick={() => signInWithGoogle()}
          className="ring-1 rounded-lg ring-primary-100 px-4 w-[350px] text-lg block h-[40px] mb-5 mx-auto hover:bg-primary hover:text-white mt-5"
        >
          Sign in with Google
        </button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Signin;
