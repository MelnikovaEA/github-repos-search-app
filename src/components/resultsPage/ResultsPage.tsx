import * as React from 'react';
import TableComponent from "../tableComponent/TableComponent.tsx";
import DetailsComponent from "../detailsComponent/DetailsComponent.tsx";
import {styled} from "@mui/system";
import {Box} from "@mui/material";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store.ts";
import {useNavigate} from "react-router-dom";
import {setSearch} from "../../features/search/searchSlice.ts";

const CustomResultPage = styled(Box)(({theme}) => ({
    display: 'flex',
    height: '100%',
}))

const ResultsPage = () => {

    const searchData = useSelector((state: RootState) => state.search.searchData);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const errorInfo = useSelector((state: RootState) => state.repos.error);

    useEffect(() => {
        if (searchData === '' && errorInfo === null) {
            navigate('/')
        }
    }, [searchData]);

    useEffect(() => {
        if (errorInfo !== null) {
            navigate('/error');
            dispatch(setSearch(''));
            console.log(errorInfo);
        }
    }, [errorInfo, navigate, dispatch]);

    return (
        <CustomResultPage>
            <TableComponent/>
            <DetailsComponent/>
        </CustomResultPage>
    );
};

export default ResultsPage;