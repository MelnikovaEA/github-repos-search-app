import {Repo} from "./repos.ts";

export type DetailsItem = Pick<Repo, 'name' | 'description' | 'license' | 'stargazers_count' | 'language'>;
