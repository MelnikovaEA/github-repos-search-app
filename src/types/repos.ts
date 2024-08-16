//main type of object in App
export type Repo = {
    "id": number,
    "name": string,
    "description": string | null,
    "updated_at": string,
    "stargazers_count": number,
    "language": string | null,
    "forks_count": number,
    "license": string | null,
}