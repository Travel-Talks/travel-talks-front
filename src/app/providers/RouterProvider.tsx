import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom'

import { Layout } from '@app/layouts'

const ErrorBoundary = () => {
    const error = useRouteError()
    if (error) throw error
    return <></>
}

const router = createBrowserRouter([
    {
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: '/',
                element: <Layout />,
                children: [],
            },
        ],
    },
])

export const BrowserRouter = () => {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <RouterProvider router={router} />
        </Suspense>
    )
}
