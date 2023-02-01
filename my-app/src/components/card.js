import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { increaseCartItem } from '../actions/cartAction';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
var array = require('lodash/array');

export default function ProductCard(props) {
    const { enqueueSnackbar } = useSnackbar();
    const Dispatch = useDispatch()
    let product = props.product

    const onChangeHandle = (obj, variant) => {
        Dispatch(increaseCartItem(obj))
        enqueueSnackbar('Add Item Successful!', { variant });
    }

    return (
        <Card sx={{ maxWidth: 345, height: '100%' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={product.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Link to={`/product/detail/${product._id}`} style={{ textDecorationLine: 'none' }}>{product.productName}</Link>
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                    Category: {product.category}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                    Rating: {(Math.round(product.rating * 100) / 100).toFixed(2)}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                    Number of review: {product.numReviews}
                </Typography>
                <Typography variant="h7" component="div" style={{ marginTop: 20 }}>
                    Price: {product.price}$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">BUY</Button>
                <Button size="small" onClick={() => onChangeHandle(product, 'success')}>Add To Cart</Button>
            </CardActions>
        </Card>
    );
}