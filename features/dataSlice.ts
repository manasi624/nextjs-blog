import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Post, PostState } from '@/typing'


const initialState:PostState = {
    posts: [],
    loading: false,
    error: null,
    selectedPost: null,
    filteredPosts: []
}

export const fetchAsyncPosts = createAsyncThunk('fetchAsyncPosts', async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            accept: "application/json"
        }
    }
    );
    const data = await res.json();
    const posts: Post[] = data as Post[];

    return posts;
})


export const dataSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        postRequested: (state) => {
            state.loading = true;
            state.error = null;
        },
        postReceived: (state, action) => {
             state.posts = action.payload;
             state.loading = false;
        },
        postRequestFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        getPostById: (state, action) => {
            const postId = action.payload;
            state.selectedPost = state.posts.find((post) => post.id === postId) || null;
        },
        // filterPosts: (state, action) => {
        //     const searchQuery = action.payload.toLowercase();
        //     state.filteredPosts = state.posts.filter((post) =>{
        //         post.title.toLowerCase().includes(searchQuery) || 
        //         post.body.toLowerCase().includes(searchQuery)
        //     })

        // }
        
    },
    extraReducers:(builder) => {
        builder.addCase(fetchAsyncPosts.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAsyncPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        })
        .addCase(fetchAsyncPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || null;
        })
    }
})

export const { postReceived, postRequestFailed, postRequested, getPostById } = dataSlice.actions

export default dataSlice.reducer