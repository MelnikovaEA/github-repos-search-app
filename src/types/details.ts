import {Repo} from "./repos.ts";

//type of object for DetailsPage
export type DetailsItem = Pick<Repo, 'name' | 'description' | 'license' | 'stargazers_count' | 'language'>;
