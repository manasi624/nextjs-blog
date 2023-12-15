"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import pplogo from "../static/pplogo.png"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { loginUser, logoutUser } from "@/features/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import {auth} from "../app/firebase"
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Header() {

  // Checking user auth state and updating after change in loading state
  const {user, loading, error} = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (userNew) => {
      if (userNew != null) {
        const {email, displayName, uid}= userNew;
        dispatch(loginUser({ email, username:displayName, uid}))

        // console.log("setting user", userNew.uid, userNew.email, userNew.displayName);
      }
    });
  }, [loading, dispatch]);


  const handleLogout = ()=>{
    signOut(auth).then(()=>{
      dispatch(logoutUser());
      toast.info("Logged out Successfully !", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }).catch((error) => {
      toast.info("Something went wrong !", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    })
  }

  const handleBlog = () =>{
    if (!user.uid) {
      // Not permitted to view post, if not logged in
      toast.warn("Login Needed !", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      router.push('/login');
    }else{
      router.push('/posts')
    }
  }

  return (
    <header className="w-screen bg-opacity-25 bg-purple-100 flex flex-row items-center justify-between space-x-2 font-bold px-4 md:px-10 py-5 z-100">
      <div className="flex items-center space-x-2 z-100">
        <Link href="/">
          <Image
            className="rounded-full"
            width={100}
            height={80}
            src={pplogo}
            alt="logo"
          />
        </Link>
        <h3 className="text-xl hidden md:block md:text-2xl">RisingStar</h3>
      </div>
      <div className="flex flex-row items-center justify-evenly px-2 z-100">
        <div
          onClick={handleBlog}
          className="space-x-3 bg-red-100 text-base border shadow-xl hover:cursor-pointer hover:shadow-sm transition-all duration-200 px-4 py-1 rounded-lg"
        >
          <h2 className="hidden md:block">Weekly blogs to your inbox</h2>
          <h2 className="block text-sm sm:hidden">Blogs</h2>
        </div>
        {!loading && user.uid === "" && (
          <Link
            href="/login"
            className="space-x-3 bg-red-100 text-base border shadow-xl hover:cursor-pointer hover:shadow-sm transition-all duration-200 px-4 py-1 rounded-lg"
          >
            <h2 className="text-sm">Login</h2>
          </Link>
        )}
        {!loading && user.uid !== "" && (
          <div
            onClick={handleLogout}
            className="space-x-3 bg-red-100 text-base border shadow-xl hover:cursor-pointer hover:shadow-sm transition-all duration-200 px-4 py-1 rounded-lg"
          >
            <h2 className="text-sm">Logout</h2>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
