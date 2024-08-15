import * as React from 'react';
import {useState} from "react";
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    TablePagination, TableSortLabel
} from '@mui/material';
import {useSelector} from "react-redux";
import {Repo} from "../../types";
import {RootState, useAppDispatch} from "../../store.ts";
import {styled} from "@mui/system";
import NotFoundComponent from "../notFoundComponent/NotFoundComponent.tsx";
import {formatDate} from "../../features/formatUpdatetAtDate.ts";
import {clearDetails, setDetails} from "../../features/details/detailsSlice.tsx";

//style
const CustomBox = styled(Box)(({theme}) => ({
    width: '70%',
    paddingTop: '10px',
}))

//types
type OrderDirections = {
    name: 'asc' | 'desc',
    stargazers_count: 'asc' | 'desc',
    forks_count: 'asc' | 'desc',
    updated_at: 'asc' | 'desc',
};
type OrderBy = 'name' | 'stargazers_count' | 'forks_count' | 'updated_at';

const TableComponent = () => {

    const dispatch = useAppDispatch();

    //selectors
    const repos: Repo[] = useSelector((state: RootState) => state.repos.list);
    const status = useSelector((state: RootState) => state.repos.status);

    //sort
    const [orderDirections, setOrderDirections] = React.useState<OrderDirections>({
        name: 'asc',
        stargazers_count: 'asc',
        forks_count: 'asc',
        updated_at: 'asc',
    })

    const [orderBy, setOrderBy] = React.useState<OrderBy>('name');
    const [sortedData, setSortedData] = React.useState<Repo[]>(repos);

    React.useEffect(() => {
        const sortedArray = [...repos].sort((a, b) => {
            if (orderBy === 'name') {
                return orderDirections.name === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else if (orderBy === 'stargazers_count') {
                return orderDirections.stargazers_count === 'asc' ? a.stargazers_count - b.stargazers_count : b.stargazers_count - a.stargazers_count;
            } else if (orderBy === 'forks_count') {
                return orderDirections.forks_count === 'asc' ? a.forks_count - b.forks_count : b.forks_count - a.forks_count;
            } else if (orderBy === 'updated_at') {
                return orderDirections.updated_at === 'asc' ? new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime() : new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
            }
        });
        setSortedData(sortedArray);
    }, [repos, orderDirections, orderBy]);

    const handleSortRequest = (property: OrderBy) => {
        const isAsc = orderBy === property && orderDirections[property] === 'asc';
        setOrderDirections((prev) => ({
            ...prev,
            [property]: isAsc ? 'desc' : 'asc',
        }));
        setOrderBy(property);
    };

    //pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
        dispatch(dispatch(clearDetails))
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedRows = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    //table row clickHandler
    const onItemClick = (event: React.MouseEvent<HTMLTableRowElement>, id: number) => {
        const currItem: Repo = repos.find(item => item.id === id);
        if (currItem) { // Проверка на наличие currItem
            dispatch(setDetails({
                name: currItem.name,
                description: currItem.description,
                license: currItem?.license || null,
                stargazers_count: currItem.stargazers_count,
                language: currItem.language,
            }));
        }
    }

    //render received data
    const renderData = (paginatedData: Repo[]): React.ReactNode => {
        return paginatedData.map((repo) => (
            <TableRow
                key={repo.id}
                id={repo.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}, cursor: 'pointer'}}
                onClick={(event) => onItemClick(event, repo.id)}
            >
                <TableCell component='th' scope='row'>
                    {repo.name}
                </TableCell>
                <TableCell align='left'>{repo.language}</TableCell>
                <TableCell align='left'>{repo.forks_count}</TableCell>
                <TableCell align='left'>{repo.stargazers_count}</TableCell>
                <TableCell align='left'>{formatDate(repo.updated_at)}</TableCell>
            </TableRow>
        ))
    }

    return (
        <CustomBox>
            {status === 'received' && repos.length > 0 && (
                <>
                    <Typography variant='h4' gutterBottom>
                        Результаты поиска
                    </Typography>

                    <Paper sx={{width: '100%', overflow: 'hidden', boxShadow: 'none',}}>
                        <TableContainer sx={{height: '60vh', minHeight: '60vh'}}>
                            <Table stickyHeader aria-label='sticky table'>
                                <TableHead sx={{position: 'sticky', top: 0, width: '100%'}}>
                                    <TableRow>
                                        <TableCell
                                            width={'30%'}
                                        >
                                            <TableSortLabel
                                                active={true}
                                                direction={orderDirections.name}
                                                onClick={() => handleSortRequest('name')}
                                                sx={{'& .MuiTableSortLabel-icon': {margin: '0'}}}
                                            >
                                                Название
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell align="left">Язык</TableCell>
                                        <TableCell align="left">
                                            <TableSortLabel
                                                active={true}
                                                direction={orderDirections.forks_count}
                                                onClick={() => handleSortRequest('forks_count')}
                                                sx={{'& .MuiTableSortLabel-icon': {margin: '0'}}}
                                            >
                                                Число форков
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell align="left">
                                            <TableSortLabel
                                                active={true}
                                                direction={orderDirections.stargazers_count}
                                                onClick={() => handleSortRequest('stargazers_count')}
                                                sx={{'& .MuiTableSortLabel-icon': {margin: '0'}}}
                                            >
                                                Число звезд
                                            </TableSortLabel>
                                        </TableCell>
                                        <TableCell align='left'>
                                            <TableSortLabel
                                                active={true}
                                                direction={orderDirections.updated_at}
                                                onClick={() => handleSortRequest('updated_at')}
                                                sx={{'& .MuiTableSortLabel-icon': {margin: '0'}}}
                                            >
                                                Дата обновления
                                            </TableSortLabel>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {renderData(paginatedRows)}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <TablePagination
                            sx={{bottom: '0'}}
                            rowsPerPageOptions={[5, 10, 25]}
                            component='div'
                            count={repos.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </>
            )}
            {status === 'received' && repos.length === 0 && <NotFoundComponent />}
            {/*{status === 'rejected' && <NotFoundComponent />}*/}
        </CustomBox>
    );
};

export default TableComponent;