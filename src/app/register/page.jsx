"use client";
import { loading, signUp } from "@/redux/slices/userSlice";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Register = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.users.isLoading);


  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const signUpUser = async () => {
    dispatch(loading(true));
    const config = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/signup/student",
        state,
        config
      );
      console.log("sign up",res.data.data);

      let userData = res?.data?.data
      dispatch(signUp({
        user:userData?.info,
        token:userData?.access_token,
        isLoading: false,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
    { isLoading ? <div>Loading</div> : <div className="flex flex-col gap-4">
        <input
          name="fullName"
          className="border-2 p-3"
          onChange={(e) => handleChange(e)}
          placeholder="Full Name"
        ></input>

        <input
          name="email"
          className="border-2 p-3"
          onChange={(e) => handleChange(e)}
          placeholder="Email"
        ></input>
        <input
          name="password"
          className="border-2 p-3"
          onChange={(e) => handleChange(e)}
          placeholder="Password"
        ></input>
        <input
          name="phoneNumber"
          className="border-2 p-3"
          onChange={(e) => handleChange(e)}
          placeholder="Phone Number"
        ></input>
        <button
          onClick={signUpUser}
          className={`bg-blue-400 cursor-pointer border-2 px-8 py-3 rounded-lg text-black`}
        >
          Add
        </button>
      </div>}
    </div>
  );
};

export default Register;
