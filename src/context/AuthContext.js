import { createContext, useReducer } from "react";
import { useEffect } from 'react'



const initialState = {
    isAuthenticated: false,
    user: null,
};

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

const AuthContext = createContext({ ...initialState });

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const login = async (username) => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: { username } },
        });
    };

    const logout = async () => {
        dispatch({ type: LOGOUT });
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };