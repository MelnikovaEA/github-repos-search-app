import {createSlice} from "@reduxjs/toolkit";
import {Repo} from "../../types";
import {loadRepos} from "./asyncReposActions.ts";

export type ReposSlice = {
    status: 'loading' | 'rejected' | 'received' | 'idle',
    error: string | null,
    list: Repo[],
}

const initialState: ReposSlice = {
    status: 'idle',
    error: null,
    list: [],
}

const reposSlice = createSlice<ReposSlice>({
    name: 'repos',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadRepos.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadRepos.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Cannot load data';
            })
            .addCase(loadRepos.fulfilled, (state, action) => {
                state.status = 'received';
                state.list = action.payload as Repo[];
            })
    }
})

export const reposReducer = reposSlice.reducer;