import {createContext} from 'react'

import useAuth from '../hooks/useAuth'

const context = createContext()

function UserProvider({children}){
    const {cadastroUser} = userAuth ()

    return (
        <Context.Provider value= {(cadastroUser)}>
            {children}
        </Context.Provider>
    )
}