/* eslint-disable no-unused-vars */
import React from 'react'
import RootLayout from '../layout/RootLayout'
import { createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'

import AllTodo from '../pages/AllTodo'
import ActiveTodo from '../pages/ActiveTodo'
import CompletedTodo from '../pages/CompletedTodo'

const Rout = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<RootLayout/>}>
       <Route path='/all' element={<AllTodo/>}/>
    <Route path='/active' element={<ActiveTodo/>}/>
    <Route path='/completed' element={<CompletedTodo/>}/>
    </Route>
   


  )
)

export default Rout