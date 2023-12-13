"use client"
import { AppDispatch, RootState } from "@/app/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import character from "../../../static/char4.png"
import { Post } from "@/typing";
import { fetchAsyncPosts } from "@/features/dataSlice";
import Tag from "@/components/Tag";



export default function Post({params}: {params: {id:string}}) {
  const postId = parseInt(params.id);
  const dispatch:AppDispatch = useDispatch();
  const { posts, loading, error } = useSelector((state: RootState) => state.data);
  
  const [selected, setSelected] = useState<Post|null>(null);

  useEffect(() => {
    const fetchDt = async () => {
      if (!posts || posts.length === 0) {
        await dispatch(fetchAsyncPosts());
      }

      const temp = posts.find((post) => post.id === postId);
      setSelected(temp || null);
    };

    fetchDt();
  }, [dispatch, postId, posts]);


  const dummyCard = {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
    }


    if(loading || !posts){
      return (
        <div className="max-w-5xl flex flex-col items-center justify-center my-8">
          <div className="flex h-[300px] w-[400px] md:w-[800px] md:h-[400px] mx-auto flex-col md:flex-row rounded-lg shadow-lg overflow-hidden animate-pulse">
            <div className="flex-1 bg-red-100 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="block mt-2 bg-gray-300 h-4 "></div>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0 bg-gray-300 h-8 w-8"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 bg-gray-300 h-4 "></p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <div className="bg-gray-300 h-3 w-6 "></div>
                  </div>
                </div>
                <div className="flex-shrink-0 bg-gray-300 h-8 w-8"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 bg-gray-300 h-4 "></p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <div className="bg-gray-300 h-3 w-6 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  if (error) {
    return (
      <div className="text-center mx-auto my-10 text-xl ">
        <b>{error}</b>
      </div>
    );
  }


  return (
    <div className="max-w-7xl flex w-screen px-10 flex-col items-center justify-center my-8">
      <div className="flex flex-col md:flex-row mx-auto w-auto rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0 flex items-center justify-center">
          <Image
            className="h-48 w-full object-cover rounded-md"
            width={500}
            height={400}
            src="https://source.unsplash.com/featured/500x400"
            alt="Post Photo"
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href={dummyCard.category.href} className="hover:underline">
                {dummyCard.category.name}
              </a>
            </p>
            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                <Tag tagline={selected?.title || ""} color="rgb(254 233 203)" />
              </p>
              <p className="mt-3 text-base text-gray-500">
                {selected?.body}
                {selected?.body}
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href={dummyCard.author.href}>
                <span className="sr-only">{dummyCard.author.name}</span>
                <Image
                  className="h-10 w-10 rounded-full"
                  height={15}
                  width={15}
                  src={character}
                  alt="User"
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href={dummyCard.author.href} className="hover:underline">
                  {dummyCard.author.name}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={dummyCard.datetime}>{dummyCard.date}</time>
                <span aria-hidden="true">&middot;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}