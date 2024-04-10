import { Alert, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContext'
import { LoadingButton } from '@mui/lab'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const styleForm = {
    width: "100%",
    height: "400px",
    padding: "10%",
    backgroundColor: "rgba(255, 255, 255,0.1)",
}

const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
}).required()

function Login() {
    const [isLogin, setIsLogin] = React.useState(false)
    const { login } = React.useContext(AuthContext)
    const state = React.useContext(AuthContext)
    const navigate = useNavigate()

    const { reset, setError, handleSubmit, control, formState: { isSubmitting, errors } } = useForm({ state, resolver: yupResolver(schema) })

    const onSubmit = (data) => {
        console.log(data)
        setIsLogin(true)
        if (data) {
            setTimeout(() => {
                login(data.email)
                navigate('/')
            }, 1500);
        } else {
            setError('afterSubmit', { message: "Server Response Error !" })
        }
        return clearTimeout()
    }
    return (
        <>
            <div className='contaner-login' style={{ display: 'flex', padding: "10% 30% 0% 30%", height: '100vh' }}>
                <div className='login-page' style={styleForm}>
                    <Typography variant='h3' textAlign='center' mb={3}>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={3}>
                            {!!errors.afterSubmit && (
                                <Alert severity='error'>{errors.afterSubmit.message}</Alert>
                            )}

                            <Controller name="email" control={control} render={({ field, fieldState: { error } }) =>
                                <TextField label="Email" type='text' autoComplete='off' fullWidth error={!!error} helperText={error?.message} {...field}  {...field} />}
                            />
                            <Controller name='password' control={control} render={({ field, fieldState: { error } }) => (
                                <TextField label='Password' type='password' autoComplete='off' fullWidth error={!!error} helperText={error?.message} {...field} />
                            )} />
                            <LoadingButton fullWidth size='large' variant='contained' type='submit'>
                                {isLogin === true ? <>Please Waiting ...</> : <>Login</>}
                            </LoadingButton>
                        </Stack>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Login