import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Repo} from "../../types";

export const loadRepos = createAsyncThunk<
    { data: Repo[] },
    string,
    { rejectValue: string }
>(
    'repos/load-repos',
    async (searchData, {rejectWithValue}) => {
        try {
            const request = `https://api.github.com/search/repositories?q=${searchData}&sort=stars&order=desc`
            const response = await axios.get(request);

//get object type: Repo from response
            const data = response.data.items.map((repo: any) => ({
                id: repo.id,
                name: repo.name,
                description: repo.description,
                updated_at: repo.updated_at,
                stargazers_count: repo.stargazers_count,
                language: repo.language,
                forks_count: repo.forks_count,
                license: repo.license ? repo.license.name : null,
            }));

            return data;
        } catch (error) {
            if (error instanceof Error)
                return rejectWithValue(error.message);
            return rejectWithValue('Unknown error');
        }
    }
);