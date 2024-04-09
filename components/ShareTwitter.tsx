import { Post } from '@/typing'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'
import { TwitterShareButton } from 'react-share'

type ShareBtnProps = {
    selected: Post | null
}




function ShareTwitter({ selected }: ShareBtnProps) {
    return (
        <div>
            <TwitterShareButton
                url={`https://myblog-vert-zeta.vercel.app/posts/${selected?.id}`}
                title={`Post ${selected?.id}`}
            >
                Share On Twitter
            </TwitterShareButton>
        </div>
    )
}

export default ShareTwitter



export async function generateMetadata(
    { params }: { params: { id: string } }, parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id

    // fetch data
    const product: Post = await fetch(`https://myblog-vert-zeta.vercel.app/posts/${id}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: product.title,
        description: product.body,
        openGraph: {
            images: ['https://images.unsplash.com/photo-1712554652565-7c8bf2052e05?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', "https://source.unsplash.com/featured/500x400"],
        },
    }
}
