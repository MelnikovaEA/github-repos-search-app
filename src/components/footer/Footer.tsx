import {styled} from "@mui/system";
import {Box} from "@mui/material";

const FooterBox = styled(Box)(({theme}) => ({
    minHeight: '5vh',
    backgroundColor: '#4F4F4F'
}));

const Footer = () => {
    return <FooterBox />
};

export default Footer;