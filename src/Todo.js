import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';

function Todo(props) {
    const [value, setValue] = useState(" ")
    const [value1, setValue1] = useState()
    const [error, setError] = useState(true)
    const [item, setItem] = useState([])
    const add = () => {
        if (value.trim() === "") {
            setError(false)
            return;
        }
        setError(true)
        // setItem([...item, value])
    }
    console.log(error);
    const deletedd = (id) => {
        let result = item.filter((_, i) => i !== id)
        setItem(result)
    }
    return (

        <div style={{ backgroundColor: value1 }}>


            <Grid container sx={{ mt: 10, }}
                direction="row"
                justifyContent="center"
                alignItems="center">

                <Grid item xs={6}  >
                    <h1 style={{ position: "relative", left: "340px" }}>Todo</h1>

                    <TextField value={value} onChange={(e => setValue(e.target.value))} />
                    <Button sx={{ ml: 2 }} variant='contained' color='secondary' onClick={add}>Add</Button>
                    {!error && <p>Enter the Field!!</p>}
                    {item.map((data, i) => (<>
                        <h1>{data}</h1> <Button variant='contained' color='secondary' onClick={() => deletedd(i)}>deletee</Button>

                    </>))}

                </Grid>



            </Grid>

            <TextField value={value1} onChange={(e => setValue1(e.target.value))} />
        </div>

    );
}

export default Todo;