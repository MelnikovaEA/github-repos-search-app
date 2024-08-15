import * as React from 'react';
import {Typography, Chip, Box} from "@mui/material";
import {MainBox, WrapperBox} from "./styles.tsx";
import StarIcon from '@mui/icons-material/Star';
import {styled} from "@mui/system";
import {useSelector} from "react-redux";
import {DetailsItem} from "../../types";
import {RootState} from "../../store.ts";

const EmptyBox = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'grid',
    placeItems: 'center',
}))

const DetailsComponent = () => {

    const data: DetailsItem = useSelector((state: RootState) => state.details.item);

    return (
        <MainBox>
            {!data ? <EmptyBox>
                    Выберите репозиторий
                </EmptyBox>
                : <>
                    <Typography>{data.name}</Typography>
                    <WrapperBox>
                        <Chip label={data.language} color="primary"/>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <StarIcon sx={{color: '#FFB400', paddingRight: '5px'}}/> {data.stargazers_count}
                        </Box>
                    </WrapperBox>
                    <Typography>{`Description: ${data.description}`}</Typography>
                    <Typography>{`License: ${data.license ? data.license : 'No licsense'}`}</Typography>
                </>}
        </MainBox>
    );
};

export default DetailsComponent;