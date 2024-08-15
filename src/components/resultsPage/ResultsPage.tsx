import * as React from 'react';
import TableComponent from "../tableComponent/TableComponent.tsx";
import DetailsComponent from "../detailsComponent/DetailsComponent.tsx";
import {styled} from "@mui/system";
import {Box} from "@mui/material";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store.ts";
import {useNavigate} from "react-router-dom";

const CustomResultPage = styled(Box)(({theme}) => ({
    display: 'flex',
    height: '100%',
}))

const ResultsPage = () => {

    const searchData = useSelector((state: RootState) => state.search.searchData);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchData === '') {
            navigate('/')
        }
    }, [searchData]);

    return (
        <CustomResultPage>
            <TableComponent/>
            <DetailsComponent/>
        </CustomResultPage>
    );
};

export default ResultsPage;