import { createContext, useReducer } from "react";

const initialState = {
    isAuthenticated: false,
    user: window.localStorage.getItem('user'),
    pass: window.localStorage.getItem('password'),
};

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

// console.log(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                pass: action.payload.pass,
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

    const login = async (username, password) => {
        window.localStorage.setItem('user', username);
        window.localStorage.setItem('password', password);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: { username }, pass: { password } },
        });
    };

    const logout = async () => {
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('password');
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