import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { MainContextProvider } from './contexts/mainContext'
import { UserContextProvider } from './contexts/userContext'
import { PostContextProvider } from './contexts/postContext'
import Layout from './pages/Layout'
import Posts from './pages/Posts'
import SinglePost from './pages/SinglePost'
import User from './pages/User'
import Error from './pages/Error'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Layout />
          }>
            <Route path='u/:userId' element={
              <UserContextProvider>
                <User />
              </UserContextProvider>
            } />
            <Route path='p' element={
              <PostContextProvider>
                <Posts />
              </PostContextProvider>
            } />
            <Route path='p/:postId' element={
              <PostContextProvider>
                <SinglePost />
              </PostContextProvider>
            } />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  </React.StrictMode>
)
