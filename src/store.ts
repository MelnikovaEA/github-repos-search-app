import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {reposReducer} from "./features/repos/reposSlice.ts";
import {searchReducer} from "./features/search/searchSlice.ts";
import {detailsReducer} from "./features/details/detailsSlice.tsx";

export const store = configureStore({
    reducer: {
        repos: reposReducer,
        search: searchReducer,
        details: detailsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;