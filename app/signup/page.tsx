"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import pplogo from "../../static/pplogo.png";
import { User } from "@/typing";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../firebase"
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function SignUp() {
  const [creds, setCreds] = useState<User>({uid:"", email:"", password:"", username:""});
  const {user, loading, error} = useSelector((state:RootState) => state.user);
  const router = useRouter();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };


  const HandleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (creds.email && creds.username && creds.password.length >= 6) {
      createUserWithEmailAndPassword(auth, creds.email, creds.password)
        .then((userCredential) => {
          const user = userCredential.user;
          if(auth.currentUser){
            updateProfile(auth.currentUser, { displayName: creds.username });
          }
          router.push('/posts')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <Link href="/">
        <Image
          className="rounded-full"
          width={200}
          height={200}
          src={pplogo}
          alt="logo"
        />
      </Link>
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form onSubmit={HandleSignup}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
              value={creds.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Usesrname
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your username"
              value={creds.username||""}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
              value={creds.password}
              onChange={changeHandler}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white rounded-md bg-orange-400 hover:shadow-md"
          >
            Signup
          </button>
        </form>
        <div className="flex flex-row flex-nowrap justify-center items-center m-2 p-2">
          <button className="p-2 mx-2 text-white rounded-md bg-orange-400 hover:shadow-md">
            Google
          </button>
          <Link href="/login">
            <button className="p-2 mx-2 text-white rounded-md bg-orange-400 hover:shadow-md">
              Login
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
