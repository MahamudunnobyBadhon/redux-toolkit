const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: "user",
    initialState: {
     isLoading: false,
     token: null,
     user: null   
    },
    reducers:{
        signUp: (state, action) => {
            const {token, user} = action.payload
            state.user = user,
            state.token = token
            state.isLoading = false
        },
        login: (state, action) =>{
            const { token, user } = action.payload
            state.user = user,
            state.token = token
        },
        logOut: (state, action) =>{
            state.user = null
        },
        loading: (state, action) =>{
            state.isLoading = action.payload
        } 
    }
    
})

export const {signUp, login, logOut, loading} = userSlice.actions;
export default userSlice.reducer