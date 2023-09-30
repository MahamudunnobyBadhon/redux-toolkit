const { createSlice } = require("@reduxjs/toolkit");

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
    },
    reducers:{
        addPost: (state, action) =>{
            state.posts.push(action.payload)
        },
        deletePost: (state, action) =>{
            state.posts.splice(action.payload, 1)
        },

        deleteAll: (state, action)=>{
            state.posts=[]
        }
    }
})

export const {addPost, deletePost, deleteAll} = postSlice.actions;
export default postSlice.reducer;