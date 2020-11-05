import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>Home</div>} />
      <Route path='/signin' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  </BrowserRouter>
)

export default Router
