import * as React from 'react';
import {Box} from "@mui/material";
import {styled} from "@mui/system";

const CustomBox = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    fontSize: '30px'
}))

const NotFoundComponent = () => {
    return (
        <CustomBox>
            Ничего не найдено
        </CustomBox>
    );
};

export default NotFoundComponent;