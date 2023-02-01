import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { decreaseCartItem, increaseCartItem } from "../../actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
var array = require('lodash/array');

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  
  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 200px;
    object-fit: cover;
    margin-left: 40px;
  }
  `;



const CartItem = ({ item }) => {
    const Dispatch = useDispatch();

    const addToCart = (item) => {
        // const listCart = JSON.parse(localStorage.getItem('listCart'));
        // const cartIndex = array.findIndex(listCart, { _id: id });
        // setAmount(amount => amount + 1);
        // listCart[cartIndex].amount++;
        // localStorage.setItem('listCart', JSON.stringify(listCart));

        Dispatch(increaseCartItem(item));
    }

    const removeFromCart = (id) => {
        Dispatch(decreaseCartItem(item));
    }

    return (
        <Wrapper>
            <div>
                <h3>{item.productName}</h3>
                <div className="information">
                    <p>Price: ${item.price}</p>
                    {/* <p>Total: ${(item.amount * item.price).toFixed(2)}</p> */}
                    <p>Total: {item.amount * item.price}</p>
                </div>
                <div className="buttons">
                    <Button
                        size="small"
                        disableElevation
                        variant="contained"
                        onClick={() => removeFromCart(item._id)}
                    >
                        -
                    </Button>
                    <p>{item.amount}</p>
                    {/* <p>{item.amount}</p> */}
                    <Button
                        size="small"
                        disableElevation
                        variant="contained"
                        onClick={() => addToCart(item)}
                    >
                        +
                    </Button>
                </div>
            </div>
            <img src={item.image} alt={item.productName} />
        </Wrapper>
    )
}

export default CartItem;