import {Typography, Chip, Box} from "@mui/material";
import {MainBox, WrapperBox, EmptyBox} from "./styles.tsx";
import StarIcon from '@mui/icons-material/Star';
import {useSelector} from "react-redux";
import {RootState} from "../../store.ts";

const DetailsComponent = () => {

    const data = useSelector((state: RootState) => state.details.item);
    const repos = useSelector((state: RootState) => state.repos.list);

    return (
        <MainBox>
            {repos.length === 0 ? (
                <EmptyBox/>
            ) : !data
                ? <EmptyBox>
                    Выберите репозиторий
                </EmptyBox>
                : <>
                    <Typography sx={{fontSize: '30px', fontWeight: 600}}>{data.name}</Typography>
                    <WrapperBox>
                        <Chip label={data.language ? data.language : 'Язык не указан'} color="primary"/>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <StarIcon sx={{color: '#FFB400', paddingRight: '5px'}}/> {data.stargazers_count}
                        </Box>
                    </WrapperBox>
                    <Typography sx={{paddingTop: '20px'}}>{`Описание: ${data.description ? data.description : 'Нет' +
                        ' описания'}`}</Typography>
                    <Typography
                        sx={{paddingTop: '10px'}}>{`Лицензия: ${data.license ? data.license : 'Нет лицензии'}`}</Typography>
                </>}
        </MainBox>
    );
};

export default DetailsComponent;