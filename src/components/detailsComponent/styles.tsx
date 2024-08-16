import {styled} from "@mui/system";
import {Box} from "@mui/material";

export const MainBox = styled(Box)(({theme}) =>({
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    padding: '24px',
    backgroundColor: '#F2F2F2',
    overflow: 'hidden',

    '& > *': {
        padding: theme.spacing('4px'), // Используйте значение, которое вам нужно
    },
}));

export const WrapperBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between'
});

export const EmptyBox = styled(Box)({
    height: '100%',
    display: 'grid',
    placeItems: 'center',
});