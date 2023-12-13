export interface Post{
    _type:"post",
    userId:number,
    id:number,
    title:string,
    body:string
}

export interface PostState{
    posts: Post[],
    loading: boolean,
    error: string | null,
    selectedPost: Post | null,
    filteredPosts: Post[]
}