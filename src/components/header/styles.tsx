import {Button, TextField, AppBar, Toolbar} from "@mui/material";
import {styled} from "@mui/system";

export const CustomAppBar = styled(AppBar)(({theme}) => ({
    position: 'static',
    backgroundColor: '#00838F',
    boxShadow: 'none',
}));

export const CustomToolbar = styled(Toolbar)(({theme}) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '19px 0',
    boxSizing: 'border-box',
}))

export const CustomTextField = styled(TextField)(({theme}) => ({
    width: '912px',
    maxWidth: '912px',
    boxSizing: 'border-box',
    marginRight: '8px',

    '& .MuiOutlinedInput-root': {
        backgroundColor: 'white',

        '&:hover fieldset': {
            borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    },

    '& .MuiInputLabel-root': {
        color: 'black',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'black',
    },
}));

export const CustomButton = styled(Button)(({theme}) => ({
    padding: '9px 22px',
    backgroundColor: '#2196F3'
}));
