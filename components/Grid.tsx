import { Post } from "@/typing"
import Card from "./Card";
import { useEffect, useState } from "react";


type Props = {
    posts:Post[]
}
const PAGE_SIZE = 6;

function getYoutubeVideoId(url:string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2] ? match[2] : null;
}



const YoutuveVideoShareLinks = [
  "https://www.youtube.com/watch?v=7DLhTU3wiy4",
  "https://youtu.be/a4Ji4Bo7ZV8?si=LIZZd_kBoP8XKbOW",
  "https://youtu.be/GD8xHjxnyK8?si=8_jF95JUABxDGWnv",
  "https://youtu.be/dbhurBoV9po?si=RbTONt84ZzZ3Vyzc",
  "https://youtu.be/CeULH0LrXh8?si=YqMySftXdP_3j7cl",
  "https://www.youtube.com/watch?v=Vb9QCgGp_TA",
  
]

export default function Grid({posts}: Props){

  function getRandomYoutubeVideo(links: string[]): string {
    // Get the array length
    const linkCount = links.length;
  
    // Generate a random index between 0 (inclusive) and linkCount (exclusive)
    const randomIndex = Math.floor(Math.random() * linkCount);
  
    // Return the video link at the random index
    return links[randomIndex];
  }
  

  // Inbuilt pagination implemented
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
      <div className="flex flex-col text-black dark:text-white">
        <div className="mt-12 max-w-3xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {data?.map((post, index) => (
            <Card post={post} key={post.id} VideoID={getYoutubeVideoId(YoutuveVideoShareLinks[index%6]) ?? ''}/>
          ))}
        </div>

        {/* Pagination */}
        <div className="m-4 flex flex-row items-center justify-center p-4">
          <div className=" my-2 pagination flex flex-row items-center text-center justify-center px-4">
            <button
              className="border text-sm sm:text-lg border-transparent px-3 mx-3 rounded-full h-fit w-fit bg-gray-400"
              onClick={() => {
                // console.log("previous");
                if (pagenum > 1) {
                  setPagenum(pagenum - 1);
                }
              }}
              disabled={pagenum === 1}
            >
              &#x21d0; Previous
            </button>
            <div>{pagenum}</div>
            <button
              className="border text-sm sm:text-lg border-transparent px-3 mx-3 rounded-full h-fit w-fit bg-gray-400"
              onClick={() => {
                // console.log("previous");
                if (pagenum < Math.ceil(posts.length / PAGE_SIZE))
                  setPagenum(pagenum + 1);
              }}
              disabled={pagenum === Math.ceil(posts.length / PAGE_SIZE)}
            >
              Next &#8658;
            </button>
          </div>
        </div>
      </div>
    );
}