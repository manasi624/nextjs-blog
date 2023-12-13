'use client'
import { useDispatch, useSelector } from "react-redux";
import { PostState, Post } from "@/typing";
import { useEffect, useState } from "react";
import { fetchAsyncPosts, getPostById } from "@/features/dataSlice";
import Grid from "@/components/Grid";
import { AppDispatch, RootState } from "../store";
import LoadingCard from "@/components/LoadingCard";


export default function Posts() {

  const dispatch:AppDispatch = useDispatch();
  const { posts, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(()=>{
    if(posts.length == 0){
      dispatch(fetchAsyncPosts());
    }
  }, [posts])

  const [data, setData] = useState<Post[]>(posts);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = async (query:string) => {
    const filtered = await query ? data?.filter((post) => {
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
    }): posts;
    
    setData(filtered);
  }
  handleSearch(searchQuery);

// Loading State
  if (loading) {
    return (
      <div className="flex flex-col">
        <div className="mt-12 max-w-3xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {[1, 2, 3]?.map((dummypost) => (
              <LoadingCard key={dummypost} />
          ))}
        </div>
      </div>
    );
  }


  if (error) {
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
