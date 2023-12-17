/* eslint-disable no-unused-vars */
import React from "react";
import RootLayout from "./layout/RootLayout";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
//import AllTodo from './pages/AllTodo'
//import ActiveTodo from './pages/ActiveTodo'
//import CompletedTodo from './pages/CompletedTodo'
//import './App.css'

const Rout = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={Rout} />;
}

export default App;
