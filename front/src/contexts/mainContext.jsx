import axios from "axios"
import { useContext, createContext } from "react"

export const MainContext = createContext()

export const MainContextProvider = (props) => {
    // Debería haber aquí el objeto usuario, pero como no he hecho un login, pues pongo un id para testear
    const userId = '630b6976a150ef3f81e1bbc4'

    return (
        <MainContext.Provider value={{userId}}>
            {props.children}
        </MainContext.Provider>
    )
}