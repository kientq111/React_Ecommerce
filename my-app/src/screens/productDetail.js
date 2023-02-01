import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { ListReview } from '../components/comment';
import { BreadCrumb } from '../components/breadCrumbs';
import TextField from '@mui/material/TextField';
import { RatingProduct } from '../components/rating';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../actions/productAction';
import Loader from '../components/loading';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { increaseCartItem } from '../actions/cartAction';

export function ProductDetail() {
    const { id } = useParams();
    const Dispatch = useDispatch();
    const [productDetail, setProductDetail] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        if (quantity >= 99) {
            return
        }
        setQuantity(quantity + 1);
    }

    const decrease = () => {
        if (quantity === 1) {
            return
        }
        setQuantity(quantity - 1);
    }

    const onChangeHandle = (e) => {
        if (isNaN(e.target.value)) {
            return
        }

        const textBoxValue = Number(e.target.value)
        setQuantity(textBoxValue)
    }

    const addProductToCart = (product, pQuantity) => {
        Dispatch(increaseCartItem(product, pQuantity))
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getProductById(id);
                setProductDetail(data);
                setLoading(false);
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        getData()
    }, [])


    return (
        <Box sx={{ flexGrow: 1 }} style={{ width: '80%', marginLeft: '10%' }}>

            {loading === true && <Loader isLoading={loading} />}
            {error && <div style={{height:500}}><h1>Opps, There's something wrong! </h1></div>}
            {productDetail && <>
                <Grid container spacing={1}>
                    <Grid xs={6}>
                        <img
                            src={productDetail.image}
                            style={{ height: 500, width: 500 }} alt="img" />
                    </Grid>
                    <Grid xs={6}>
                        <h4>{productDetail.category}</h4>
                        <Typography variant="h3" gutterBottom>
                            {productDetail.productName}
                        </Typography>

                        <Typography variant="h6">Price: {productDetail.price}$</Typography>
                        <Typography variant="body2">{productDetail.description}</Typography>
                        <Divider variant="middle" />
                        <div style={{ marginTop: 20 }}>
                            <IconButton onClick={decrease}>
                                <RemoveIcon />
                            </IconButton>
                            <TextField size='small' value={quantity} onChange={onChangeHandle} style={{ width: '50px' }}
                            />
                            <IconButton onClick={increase}>
                                <AddIcon />
                            </IconButton>
                            <div style={{ marginTop: 20 }}></div>
                            <Button variant="contained">Buy</Button>
                            <Button variant="contained" style={{ marginLeft: 10, backgroundColor: 'orange' }} onClick={() => addProductToCart(productDetail, quantity)} >Add to
                                Cart</Button>
                        </div>
                    </Grid>
                </Grid>
                <Divider variant="middle" style={{ marginTop: 20, marginBottom: 20 }} />
                <Typography style={{ marginBottom: 10, fontWeight: 'bold' }}>Review By Users</Typography>
                <div>
                    <TextField label="Input your review" size="small" multiline={true} style={{ width: '60%' }} />
                    <RatingProduct />
                    <Button variant="contained" style={{ marginTop: 10 }}>Review</Button>
                </div>
                <ListReview />
            </>
            }


        </Box >


    );
}