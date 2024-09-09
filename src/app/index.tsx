import '@shared/styles/index.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from './providers/RouterProvider'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter />
    </StrictMode>,
)
