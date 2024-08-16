import {CustomBox} from "./styles.tsx";
import {useAppDispatch} from "../../store.ts";
import {useEffect} from "react";
import {setSearch} from "../../features/search/searchSlice.ts";
import {clearDetails} from "../../features/details/detailsSlice.tsx";

const HomePage = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setSearch(''));
        dispatch(clearDetails());
    }, []);

    return (
        <CustomBox>
            Добро пожаловать
        </CustomBox>
    );
};

export default HomePage;