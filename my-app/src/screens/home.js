import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/card';
import { HotProduct } from '../components/hotProduct';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../actions/productAction';
import Loader from '../components/loading';
import Paging from '../components/pagingProduct';

export default function Home() {
    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.getProduct)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])


    return (
        <>
            <Loader isLoading={loading} />
            <>
                <div style={{ height: 700 }}>
                    <HotProduct />
                </div>
                <Typography variant="h5" component="h5" style={{ marginTop: 50, marginBottom: 20 }}>
                    New Products
                </Typography>
                <Box sx={{ flexGrow: 1 }} style={{ marginLeft: '1%' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                        {products?.product?.map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <ProductCard product={_} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Paging pageCount={products?.totalPage || 1} />
            </div>
        </>
    );
}