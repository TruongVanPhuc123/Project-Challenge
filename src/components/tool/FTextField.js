import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form'

export default function BasicTextFields({ control, label, name }) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <Controller name={name} control={control} render={({ field }) =>
                <TextField
                    {...field}
                    sx={{ width: "100%" }}
                    label={label}
                    fullWidth />}

            />

        </Box>
    );
}