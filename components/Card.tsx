import { Post } from "@/typing";
import Image from "next/image";
import Link from "next/link";


type Props = {
    post:Post
}

export default function Card({post}: Props){
    return (
      <Link href={`posts/${post.id}`}
        key={post.title}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
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
      </Link>
    );
}