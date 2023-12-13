import { Post } from "@/typing"
import Card from "./Card";
import { useEffect, useState } from "react";


type Props = {
    posts:Post[]
}
const PAGE_SIZE = 6;

export default function Grid({posts}: Props){

    const [pagenum, setPagenum] = useState(1);
    const [data, setData] = useState<Post[]>(posts||[]);
    useEffect(()=>{
      paginate(pagenum);
    }, [pagenum, posts])

    const paginate = (pagenum:number)=>{
      const startIndex = (pagenum-1)* PAGE_SIZE;
      const endIndex = startIndex + PAGE_SIZE;
      const newDt:Post[] = posts.slice(startIndex, endIndex);
      setData(newDt);
      
    }

    return (
      <div className="flex flex-col">
        <div className="mt-12 max-w-3xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {data?.map((post) => (
            <Card post={post} key={post.id} />
          ))}
        </div>


        {/* Pagination */}
        <div className="m-4 flex flex-row items-center justify-center p-4">
          <div className=" my-2 pagination flex flex-row items-center text-center justify-center px-4">
            <button
              className="border text-sm sm:text-lg border-transparent px-3 mx-3 rounded-full h-fit w-fit bg-gray-400"
              onClick={() => {
                console.log("previous");
                if (pagenum > 1) {
                  setPagenum(pagenum - 1);
                }
              }}
              disabled={pagenum === 1}
            >
              🔙 Previous
            </button>
            <div>{pagenum}</div>
            <button
              className="border text-sm sm:text-lg border-transparent px-3 mx-3 rounded-full h-fit w-fit bg-gray-400"
              onClick={() => {
                console.log("previous");
                if (pagenum < Math.ceil(posts.length / PAGE_SIZE))
                  setPagenum(pagenum + 1);
              }}
              disabled={pagenum === Math.ceil(posts.length / PAGE_SIZE)}
            >
              Next 🔜
            </button>
          </div>
        </div>
      </div>
    );
}