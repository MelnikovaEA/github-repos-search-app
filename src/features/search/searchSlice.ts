import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type SearchSlice = {
    searchData: string
}

const initialState: SearchSlice = {
    searchData: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.searchData = action.payload;
        }
    }
})

export const {setSearch} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;