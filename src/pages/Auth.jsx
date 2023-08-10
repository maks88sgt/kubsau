import {Box, Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";

import {setRoles, setToken} from '../store/authActions';
import { useSinginMutation } from '../store/authApi';


export const  Auth = ()=> {
    const [username, setUsername] = useState("");
    const [isUsernameError, setIsUsernameError] = useState("");

    const [password, setPassword] = useState("");
    const [isPasswordError, setIsPasswordError] = useState("");

    const [singin, signinResult] = useSinginMutation();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(()=>{
        if (signinResult.isSuccess) {
            dispatch(setToken({token:signinResult.data?.accessToken}))
            dispatch(setRoles({token:signinResult.data?.roles}))
            navigate("/")
        }
    }, [signinResult])


    return <Box sx={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "space-around"
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: "40vw",
            height: "50vh",
            alignItems: "center",
            gap: "24px"
        }}>
            <TextField
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                label={"Введите имя пользователя"}
                error={!!isUsernameError}
                onBlur={() => {
                    if (username.length < 3) {
                        setIsUsernameError("Имя пользователя должно содержать более 3 символов")
                    }
                }}
                onFocus={() => {
                    setIsUsernameError("")
                }}
                helperText={isUsernameError}
            />
            <TextField
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                label={"Введите пароль"}
                error={!!isPasswordError}
                onBlur={() => {
                    if (password.length < 8) {
                        setIsPasswordError("Пароль должен содержать не менее 8 символов")
                    }
                    if (password.match(/^[a-zA-Z]+$/g)) {
                        setIsPasswordError("Пароль должен содержать только латинские буквы и цифры")
                    }
                }}
                onFocus={() => {
                    setIsPasswordError("")
                }}
                helperText={isPasswordError}
            />
            <Button onClick={()=> {
                singin({username, password})
            }} variant={"contained"}>Авторизоваться</Button>
        </Box>
    </Box>
}
