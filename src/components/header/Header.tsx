import * as React from "react";
import {CustomAppBar, CustomTextField, CustomButton, CustomToolbar} from "./styles.tsx";
import {AppContainer} from "../container/Container.tsx";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store.ts";
import {setSearch} from "../../features/search/searchSlice.ts";
import {loadRepos} from "../../features/repos/asyncReposActions.ts";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const data = useSelector((state: RootState) => state.search.searchData);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(event.target.value));
    };

    const handleClick = () => {
        dispatch(loadRepos(data));
        navigate('/results', {});
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <CustomAppBar>
            <AppContainer>
                <CustomToolbar>
                    <CustomTextField
                        id="outlined-controlled"
                        label="Введите поисковый запрос"
                        variant="outlined"
                        size="small"
                        value={data}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                    />
                    <CustomButton
                        variant="contained"
                        size="small"
                        onClick={() => handleClick()}
                    >искать</CustomButton>
                </CustomToolbar>
            </AppContainer>
        </CustomAppBar>
    );
};

export default Header;