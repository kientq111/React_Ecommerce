import { useState, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { getProduct } from '../actions/productAction';

export default function PaginationControlled(props) {
    const [page, setPage] = useState(1);
    const { pageCount } = props
    const dispatch = useDispatch();
    const handleChange = (event, value) => {
        setPage(value);
        console.log(value)
        dispatch(getProduct(value))
    };

    return (
        <div style={{ marginTop: 30 }}>
            <Pagination count={pageCount} page={page} onChange={handleChange} size={'large'} />
        </div>
    );
}