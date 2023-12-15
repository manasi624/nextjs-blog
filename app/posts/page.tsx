'use client'
import { useDispatch, useSelector } from "react-redux";
import { PostState, Post } from "@/typing";
import { useEffect, useState } from "react";
import { fetchAsyncPosts, getPostById } from "@/features/dataSlice";
import Grid from "@/components/Grid";
import { AppDispatch, RootState } from "../store";
import LoadingCard from "@/components/LoadingCard";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export default function Posts() {

  const dispatch:AppDispatch = useDispatch();
  const router = useRouter();
  const { posts, loading, error } = useSelector((state: RootState) => state.data);
  const {user, loading:userLoading, error:userError} = useSelector((state:RootState) => state.user);
  const [data, setData] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(()=>{
    // Only load posts if required
    if(posts.length === 0 || !posts){
      dispatch(fetchAsyncPosts());
    }
  }, [dispatch])
  useEffect(()=>{
    setData(posts);
  }, [posts])

    useEffect(() => {
      if (!user.uid) {
        // Not permitted to view posts, if not logged in
        toast.warn("Login Needed !", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        router.push('/login');
      }
    }, [dispatch, user]);



  // Handlesearch will not modify posts, it will use data state (temporary)
  const handleSearch = (query: string) => {
    let filtered = posts;
    if (query) {
      filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.body.toLowerCase().includes(query.toLowerCase())
      );
    }
    setData(filtered);
  };

  // Update data state whenever searchQuery updates
  useEffect(()=>{
    handleSearch(searchQuery);
  }, [searchQuery])

// Loading State for posts
  if (loading) {
    return (
      <div className="flex flex-col">
        <div className="flex m-4 p-4">
          <input
            className="text-base w-full shadow-md bg-red-50 p-2 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="ml-3 bg-orange-400 p-2 rounded-lg shadow-sm"
          >
            Search
          </button>
        </div>
        <div className="mt-12 max-w-3xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {[1, 2, 3]?.map((dummypost) => (
            <LoadingCard key={dummypost} />
          ))}
        </div>
      </div>
    );
  }


  if (error) {
    toast.error(error, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    return <div className="text-center mx-auto my-10 text-xl "><b>{error}</b></div>;
  }

  return (
    <div>
      <div>
          <div className="flex m-4 p-4">
            <input
              className="text-base w-full shadow-md bg-red-50 p-2 rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={() => handleSearch(searchQuery)}
              className="ml-3 bg-orange-400 p-2 rounded-lg shadow-sm"
            >
              Search
            </button>
          </div>

        </div>
        <Grid posts={data} />
  </div>

  );
}
