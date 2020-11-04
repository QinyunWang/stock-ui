import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>Home</div>} />
      <Route path='/signin' element={<Login />} />
    </Routes>
  </BrowserRouter>
)

export default Router
