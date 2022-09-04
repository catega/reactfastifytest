import { useParams } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from "react";
import { MainContext } from "../contexts/mainContext"
import axios from 'axios'

export const UserContext = createContext()

export const UserContextProvider = (props) => {

    const {userId} = useParams()
    const [posts, setPosts] = useState(null)
    const [userExists, setUserExists] = useState(true)

    const getUserPosts = async (id) => {
        try {
            const user = await axios.get(`http://localhost:3000/u/${id}`)
            setPosts(user.data.userPosts)
        } catch (err) {
            if (err.response.status === 404) {
                setUserExists(false)
            }
        }
    }

    const deleteUserPost = async (id) => {
        await axios.delete(`http://localhost:3000/p/${id}`)
        const p = await axios.get(`http://localhost:3000/p/u/${userId}`)
        setPosts(p.data)
    }

    useEffect(() => {
        getUserPosts(userId)
    },[])
    
    if (!userExists){
        return (
            <h1>User not found</h1>
        )
    }

    return (
        <UserContext.Provider value={{posts, userId, deleteUserPost}}>
            {props.children}
        </UserContext.Provider>
    )
}