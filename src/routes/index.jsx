import React from 'react'
import {Routes,Route} from "react-router-dom"
import { pageRoutesList } from '../hooks/paths'

const PageRoutes = () => {
  return (
    <Routes>{pageRoutesList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}</Routes>
  )
}

export default PageRoutes