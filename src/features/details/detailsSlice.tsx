import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DetailsItem} from "../../types";

export type DetailsSlice = {
    //error: string | null,
    item: DetailsItem | null
}

const initialState: DetailsSlice = {
    //error: null,
   item: null,
}

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setDetails: (state, action: PayloadAction<DetailsItem>) => {
            state.item = action.payload;
        },
        clearDetails: () => initialState,
    }
})

export const {setDetails, clearDetails} = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;