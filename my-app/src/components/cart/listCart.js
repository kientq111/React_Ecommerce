import styled from "styled-components";
import { Button } from "@mui/material";
import CartItem from "./cartItem";
import { useSelector } from "react-redux";
export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;



const ListCart = props => {
    const data = useSelector((state) => state.cart);
    const userData = useSelector((state) => state.loginAccount)
    const calculateTotal = (items) =>
        items.reduce((acc, item) => acc + item.amount * item.price, 0);

    const checkOutHandle = (cartData, totalMoney) => {
        console.log({ totalMoney });
        console.log({ cartData });
        console.log({userData});
    }

    return (
        <Wrapper>
            <h2>Your Cart</h2>
            {data.length === 0 ? <p>No items in cart.</p> : null}
            {data.map((item) => (
                <CartItem
                    key={item._id}
                    item={item}
                />
            ))}
            <h2>Total: ${calculateTotal(data)}</h2>
            <div>
                <Button onClick={() => checkOutHandle(data, calculateTotal(data))}>Checkout</Button>
            </div>
        </Wrapper>
    );
};

export default ListCart;