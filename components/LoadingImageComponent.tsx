import Image from "next/image"
import img from "../public/img.jpg"



export default function LoadingImageComponent() {

    const images = [
        "https://images.unsplash.com/photo-1712554652565-7c8bf2052e05?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1712416194085-aca7ba85f316?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    return (
        <div className="flex flex-col md:flex-row mx-auto w-auto rounded-lg shadow-lg overflow-hidden m-4 gap-3">
          <div className="">
            <Image
              className=" w-full object-cover rounded-md m-1"
              width={500}
              height={400}
              src="https://source.unsplash.com/featured/500x400"
              alt="Post Photo"
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://source.unsplash.com/featured/500x400"
            />
          </div>
          <div className="">
            <Image
              className=" w-full object-cover rounded-md m-1"
              width={500}
              height={400}
              src={images[0]}
              alt="Post Photo"
              loading="lazy"
            />
          </div>
          <div className="">
            <Image
              className=" w-full object-cover rounded-md m-1"
              width={500}
              height={400}
              src={images[1]}
              alt="Post Photo"
              loading="lazy"
            />
          </div>
        </div>
    )
}