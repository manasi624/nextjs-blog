"use client"
import React, { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import pplogo from "../../static/pplogo.png"
import { User } from "@/typing";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [creds, setCreds] = useState<User>({uid:"", email:"", password:"", username:""});

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(creds)
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const HandleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (creds.email && creds.password.length >= 6) {
      signInWithEmailAndPassword(auth, creds.email, creds.password)
        .then((userCredential) => {
          const user = userCredential.user;
          router.back();
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
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
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
            Login
          </button>
        </form>
        <div className="flex flex-row flex-nowrap justify-center items-center m-2 p-2">
          <button className="p-2 mx-2 text-white rounded-md bg-orange-400 hover:shadow-md">
            Google
          </button>
          <Link href="/signup">
            <button className="p-2 mx-2 text-white rounded-md bg-orange-400 hover:shadow-md">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

