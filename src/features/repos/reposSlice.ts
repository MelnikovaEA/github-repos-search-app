import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadRepos} from "./asyncReposActions.ts";
import {Repo} from "../../types";

type ReposSlice = {
    status: 'loading' | 'rejected' | 'received' | 'idle';
    error: string | null;
    list: Repo[];
};

const initialState: ReposSlice = {
    status: 'idle',
    error: null,
    list: [],
};

const reposSlice = createSlice<ReposSlice>({
    name: 'repos',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(loadRepos.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadRepos.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = 'rejected';
                state.error = action.payload || 'Cannot load data';
            })
            .addCase(loadRepos.fulfilled, (state, action) => {
                state.status = 'received';
                state.list = action.payload;
            });
    }
})

export const reposReducer = reposSlice.reducer;

