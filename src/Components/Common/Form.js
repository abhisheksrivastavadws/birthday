import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
export default function BasicTextFields({ title, setPassword, setEmail, handleAction }) {
    return (
        <div style={{backgroundColor:"darkslategray", height:"100vh"}}>
            <div className="heading-container" style={{color:"aliceblue", marginLeft:"20%", paddingTop:"5%"}} >
                <h3>
                    {title} 
                </h3>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{marginLeft:"25%"}}
            >
                <TextField
                    id="email"
                    label="Enter the Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{color:"red"}}
                />
                <TextField
                    id="password"
                    label="Enter the Password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
            </Box>

            <Button title={title} handleAction={handleAction}/>
        </div>
    );
}
