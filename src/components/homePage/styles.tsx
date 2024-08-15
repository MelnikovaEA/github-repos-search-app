import {styled} from "@mui/system";
import {Box} from "@mui/material";

export const CustomBox = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '46px',
}))