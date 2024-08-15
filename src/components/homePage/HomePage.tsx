import * as React from 'react';
import {CustomBox} from "./styles.tsx";
import {useAppDispatch} from "../../store.ts";
import {useEffect} from "react";
import {setSearch} from "../../features/search/searchSlice.ts";

const HomePage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setSearch(''))
    }, []);

    return (
        <CustomBox>
            Добро пожаловать
        </CustomBox>
    );
};

export default HomePage;