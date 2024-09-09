import { createElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { Home } from '../ui/home'

export const homeRoute: RouteObject = {
    path: '/',
    element: createElement(Home),
}
