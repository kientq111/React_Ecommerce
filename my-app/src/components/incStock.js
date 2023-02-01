import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

export const ChooseStock = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        if (count >= 99) {
            return
        }
        setCount(count + 1);
    }

    const decrease = () => {
        if (count === 0) {
            return
        }
        setCount(count - 1);
    }

    const onChangeHandle = (e) => {
        if (isNaN(e.target.value)) {
            return
        }

        const textBoxValue = Number(e.target.value)
        setCount(textBoxValue)
    }


    return (
        <>
            <IconButton onClick={decrease}>
                <RemoveIcon />
            </IconButton>
            <TextField size='small' value={count} onChange={onChangeHandle} style={{ width: '50px' }}
            />
            <IconButton onClick={increase}>
                <AddIcon />
            </IconButton>
        </>
    )
}