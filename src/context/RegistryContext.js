import React from 'react'

export const AppContext = React.createContext()

const data = {
    username: '123',
    password: '123',
}

export const RegistryProvider = ({ children }) => {

    return <AppContext.Provider value={{ data }}>
        {children}
    </AppContext.Provider>
}