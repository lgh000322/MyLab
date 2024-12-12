import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { setCookie } from "../util/cookieUtil";
const initState = {
    email: ''
}

export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => { loginPost(param) })
const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initState,
    reducers: {
        login: (state, action) => {
            return { email: action.payload.email }
        },
        logout: (state, action) => {
            console.log("logout....")
            return { ...initState }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfiled");
            const payload = action.payload

            if (!payload.error) {
                setCookie("member", JSON.stringify(payload), 1)
            }
            return payload;
        })
            .addCase(loginPostAsync.pending, (state, action) => {
                console.log("pending")
            })
            .addCase(loginPostAsync.rejected, (state, action) => {
                console.log("rejected")
            })
    }
})
export const { login, logout } = loginSlice.actions
export default loginSlice.reducer