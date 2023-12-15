import { RootState } from "@/app/store";
import { Post } from "@/typing";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";


type Props = {
    post:Post
}

export default function Card({post}: Props){
  const {user, loading:userLoading, error:userError} = useSelector((state:RootState) => state.user);

  const router = useRouter();  

  // Single post redirect logic
  const handleRedirect = ()=>{
    if(!user.uid){
      // if not authenticated, redirect to login page
      router.push('/login');
    }else{
      // else continue
      router.push(`/posts/${post.id}`);
    }
    
  }


    return (
      <div onClick={handleRedirect}
        key={post.title}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:cursor-pointer hover:shadow-sm"
      >
        {/* <div className="flex-shrink-0">
          <Image
            className="h-48 w-full object-cover"
            width={300}
            height={400}
            src="https://source.unsplash.com/featured/300x400"
            alt="Post Photo"
          />
        </div> */}
        <div className="flex-1 bg-red-100 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post?.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post?.body}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
                <span className="sr-only">Adam George</span>
            </div>
          </div>
        </div>
      </div>
    );
}